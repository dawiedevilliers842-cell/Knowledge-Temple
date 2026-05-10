/**
 * Merge public/quotes/quotesdump.txt + public/quotes/whatsappquotes.txt (if present)
 * into category JSON bundles. WhatsApp: skips images, links-only, <Media omitted>,
 * and tool/image chat asides.
 * Run: node scripts/parse-quotes-dump.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DUMP = path.join(ROOT, 'public', 'quotes', 'quotesdump.txt');
const WHATSAPP = path.join(ROOT, 'public', 'quotes', 'whatsappquotes.txt');
const OUTDIR = path.join(ROOT, 'public', 'quotes', 'categories');

const WA_HEADER =
  /^(\d{4}\/\d{2}\/\d{2}),\s*(\d{1,2}:\d{2})\s*-\s*(.+?):\s*(.*)$/;

/** Blocklist noise / non-quote paragraphs (starts with…) */
function isBlocklistedText(q) {
  const s = q.slice(0, 160).toLowerCase();
  if (/^the signpost of magic|^new world order[\s\S]*great reset|^ryan holiday\s*\|/.test(s)) return true;
  return false;
}

function clean(str) {
  return str
    .replace(/\uFEFF/g, '')
    .replace(/[\u200B-\u200D\u2060]/g, '')
    .replace(/⠀/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripUrls(htmlish) {
  return clean(htmlish.replace(/https?:\/\/\S+/g, ' ').replace(/<br\s*\/?>/gi, ' '));
}

/** Normalize curly quotes → straight doubles for storage */
function straightenQuotes(q) {
  return q
    .replace(/\u201c|\u201d|\u201e|\u00ab|\u00bb/g, '"')
    .replace(/\u2018|\u2019/g, "'");
}

function unwrapQuote(body) {
  let q = stripUrls(body).replace(/^["']+/, '').replace(/["']+$/g, '');
  q = straightenQuotes(q);
  q = q.replace(/^"+|"+$/g, '').replace(/^'+|'+$/g, '').trim();
  return clean(q);
}

function normQuoteKey(q) {
  return unwrapQuote(q)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugFromQuote(q) {
  let s = unwrapQuote(q).toLowerCase();
  s = s
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return s.slice(0, 72).replace(/-+$/, '');
}

function lengthLabel(charCount) {
  if (charCount < 60) return 'short';
  if (charCount < 160) return 'medium';
  return 'long';
}

function categorizeAuthor(rawAuthor) {
  const a = unwrapQuote(rawAuthor).toLowerCase();
  if (/seneca|marcus\s+aurelius|^aurelius$|epictetus|musonius|cleanthes/.test(a)) return 'stoicism';
  if (/lao\s+tse|lao\s*tzu|laozi|^chuang|^zhuang|tao\s+te/.test(a)) return 'taoism';
  if (/\bbuddha\b|^buddha\b|bodhidharma|mahavira/.test(a)) return 'buddhism';
  if (/nietzsche|\bcamus\b|kierkegaard|\bfrankl\b|^viktor|^victor\s+e/.test(rawAuthor.toLowerCase())) return 'existentialism';
  return 'general';
}

function tagFor(cat) {
  return cat === 'general' ? [] : [cat];
}

function sanitizeAuthor(a) {
  let s = unwrapQuote(stripUrls(a.replace(/^[-–—~|]+\s*/, '')));
  if (/^\d+h(ours)?\s+ago|finding freedom|youtube|\bab_channel\b/i.test(s)) return 'Unknown';
  const cut = s.indexOf('"');
  if (cut > 0 && s.length > 45 && cut < s.length - 15) return s.slice(0, cut).trim();
  s = s.replace(/^by\s+/i, '').replace(/,+$/g, '').trim();
  if (!s || s.length > 220) return 'Unknown';
  return s === 'Attributed to Einstein' ? 'Attributed to Einstein' : s;
}

/** Paragraphs split on blank lines, then split glued “quote-attrib newline quote” chunks */
function paragraphs(raw) {
  const rawLines = raw.split(/\r?\n/);
  const merged = [];

  let curLine = [];

  function flushLine() {
    if (curLine.length) merged.push(curLine.join(' ').trimEnd());
    curLine = [];
  }

  let i = 0;
  while (i < rawLines.length) {
    const line = rawLines[i];

    // Empty line ⇒ paragraph boundary
    if (line.trim() === '') {
      flushLine();
      merged.push('');
      i += 1;
      continue;
    }

    const t = line.replace(/^\t+/, '').trim();
    const next = rawLines[i + 1]?.replace(/^\t+/, '').trim() ?? '';

    const nextLooksLikeNewQuote = /^["\u201c]/.test(next);
    // New quoted line immediately after attribution line ⇒ start new stanza without blank above
    if (nextLooksLikeNewQuote && /\s[-–—]\s+[A-Za-zÀ-ÖØ-öø]/.test(t)) {
      curLine.push(t);
      flushLine();
      merged.push('');
      i += 1;
      continue;
    }

    curLine.push(t);
    i += 1;
  }
  flushLine();

  const blocks = [];
  let bucket = [];

  function flushBlk() {
    if (bucket.length) blocks.push(bucket.join('\n').trim());
    bucket = [];
  }

  for (const row of merged) {
    if (row === '') flushBlk();
    else bucket.push(row);
  }
  flushBlk();

  return blocks.filter((b) => b.replace(/\uFEFF/g, '').trim().length > 0);
}

/** Rough parity so delimiters inside a quoted phrase are skipped */
function isQuoteClosedBefore(text, pos) {
  let cnt = 0;
  for (let i = 0; i < pos; i++) {
    const c = text[i];
    if (c === '"' || c === '\u201c' || c === '\u201d') cnt += 1;
  }
  return cnt % 2 === 0;
}

function findLastAttributedSplit(block) {
  const delims = [' — ', ' – ', ' - ', '\n— ', '\n– ', '\n- ', '\n~ ', '~ ', '~\n'];
  let best = null;

  for (const delim of delims) {
    let idx = block.length;
    let guard = 0;
    while (guard < 5000) {
      guard += 1;
      idx = block.lastIndexOf(delim, idx - 1);
      if (idx === -1) break;
      if (!isQuoteClosedBefore(block, idx)) continue;
      const left = block.slice(0, idx).trim();
      const right = stripUrls(block.slice(idx + delim.length)).split('\n')[0].trim();
      if (/^[-–—]/.test(right)) continue;
      if (right.length >= 2 && right.length <= 220 && (/[""\u201c\u201d']/.test(left) || left.length > 30)) {
        best = { left, right };
        break;
      }
    }
    if (best) break;
  }

  return best;
}

function extractFromBlock(block, opts = { loneOuterQuote: false }) {
  let b = block.replace(/\uFEFF/g, '').trim();

  if (!/[""\u201c\u201d']/.test(b) && b.length >= 22 && b.length < 620 && /\.|!|\?|$/.test(b)) {
    if (!/\s[-–—]\s+[A-Z][a-z]/.test(b)) return { quote: stripUrls(b.replace(/\s+/g, ' ')), author: 'Unknown' };
  }

  let split = findLastAttributedSplit(b);
  if (split) return { quote: unwrapQuote(split.left), author: sanitizeAuthor(split.right) };

  const multilineClosing = /^["“„«]?([\s\S]+?)["”»]\s*[–\-—~]+\s*([^\n]+)$/s;
  let m = b.match(multilineClosing);
  if (m) return { quote: unwrapQuote(m[1]), author: sanitizeAuthor(m[2]) };

  const lines = b.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length >= 2) {
    const last = lines[lines.length - 1];
    if (/^[-–—~]\s*[A-Za-zÀ-Ö]/.test(last)) {
      const body = lines.slice(0, -1).join(' ');
      if (/[""]/.test(body)) return { quote: unwrapQuote(body), author: sanitizeAuthor(last) };
    }
  }

  if (opts.loneOuterQuote) {
    /** Sole quoted passage, no dash-attribution on the same bubble (many WA posts). */
    const outerOnlyAscii = /^\s*"([^"]*)"?\s*$/is;
    const mq = outerOnlyAscii.exec(b);
    if (mq?.[1] && mq[1].trim().length >= 18) {
      return { quote: unwrapQuote(mq[1]), author: 'Unknown' };
    }
    const osc = /^\s*\u201c([^\u201d]{18,}?)\u201d\s*$/su.exec(b);
    if (osc?.[1]) {
      return { quote: unwrapQuote(osc[1]), author: 'Unknown' };
    }
  }

  return null;
}

/**
 * WhatsApp `_chat.txt`-style export: concatenate orphan lines onto the logical message queue.
 */
function parseWhatsAppToBlocks(raw) {
  let orphan = '';
  const bodies = [];

  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(WA_HEADER);
    if (m) {
      if (orphan.trim()) bodies.push(orphan.trim());
      orphan = '';
      bodies.push((m[4] ?? '').trim());
    } else {
      orphan += `${orphan ? '\n' : ''}${line}`;
    }
  }
  if (orphan.trim()) bodies.push(orphan.trim());

  const blocks = [];

  for (const bodyRaw of bodies) {
    const t = bodyRaw.replace(/\uFEFF/g, '').trim();

    /** Drop stray name-only stubs (“Marcus Aurelius” on its own bubble). */
    if (looksLikePersonNameOnly(t)) continue;

    if (shouldSkipWaBody(t)) continue;

    const lines = t.split(/\n/).map((l) => l.trim()).filter(Boolean);

    const allHermeticBullets =
      lines.length >= 3 &&
      lines.every((L) => L.startsWith('\u201c') && L.endsWith('\u201d') && L.length < 520);
    if (allHermeticBullets) {
      blocks.push(...lines);
      continue;
    }

    const curlyPieces = [];
    let scan = 0;
    while (scan < t.length) {
      const open = t.indexOf('\u201c', scan);
      if (open === -1) break;
      const close = t.indexOf('\u201d', open + 1);
      if (close === -1) break;
      const inner = t.slice(open + 1, close).trim();
      if (inner.length >= 14 && inner.length < 450) curlyPieces.push(inner);
      scan = close + 1;
    }

    if (
      curlyPieces.length >= 3 &&
      curlyPieces.length <= 10 &&
      curlyPieces.every((p) => p.length < 380)
    ) {
      for (const c of curlyPieces) blocks.push(`${'\u201c'}${c}${'\u201d'}`);
      continue;
    }

    const asciiHits = [];
    const reAscii = /"((?:[^"\\]|\\.){14,800})"|'((?:[^'\\]|\\.){14,800})'/g;
    let am;
    while ((am = reAscii.exec(t))) {
      asciiHits.push(unwrapQuote((am[1] ?? am[2] ?? '').trim()));
    }

    const severalAsciiQuotes =
      asciiHits.length >= 3 && asciiHits.every((p) => p.length < 300 && normQuoteKey(p).length > 14);
    if (severalAsciiQuotes) {
      for (const inner of asciiHits) blocks.push(`"${inner.replace(/"/g, '')}"`);
      continue;
    }

    blocks.push(t);
  }

  return blocks;
}

/**
 * Rough filter: bubble is only a person / title name (“King Baldwin IV”, “Marcus Aurelius”).
 * Ordinary sentences include lowercase words besides first token.
 */
function looksLikePersonNameOnly(t) {
  const s = stripUrls(t.trim());
  if (s.length < 6 || s.length > 76) return false;
  if (/[""'`\u201c\u201d]/.test(s) || /[.?,:;!].*[.?,:;!]/.test(s)) return false;

  const words = s.split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 7) return false;

  /** Any clearly non-name token */
  const commonLower = /\b(and|your|their|truth|happiness|life|death|everything|anything|peace|faith)\b/i;
  if (commonLower.test(s)) return false;

  return words.every((w) => /^([A-Z][a-z.'-]+|[IVXLCDM]{1,6}|Jr\.?|Sr\.?)$/i.test(w));
}

function shouldSkipWaBody(raw) {
  const t = raw.trim();
  if (!t) return true;
  const low = t.toLowerCase();

  if (/messages and calls are end-to-end|you created this group|you pinned a message/.test(low)) {
    return true;
  }

  /** Link-only bubbles */
  const noSpacesUrl = /^https?:\/\/\S+$/i.test(t);
  const afterStrip = stripUrls(t).trim();
  if (noSpacesUrl || !afterStrip) return true;

  /** Attached image / omit markers */
  if (/^IMG-\d{8}-WA\d+\.(jpg|jpeg|webp|png)\s*\(file attached\)$/i.test(t.trim())) {
    return true;
  }

  const looksMediaOnly =
    /<media omitted>/i.test(t) ||
    /\(file attached\)$/i.test(t) ||
    /IMG-\d{8}-WA/i.test(afterStrip);

  if (
    looksMediaOnly &&
    /^IMG-\d{8}|^<Media omitted>/i.test(t.trim()) &&
    !t.includes('"') &&
    !t.includes('\u201c')
  ) {
    return true;
  }

  /** Meta / joke comments about tools or images */
  if (
    /\b(chatgpt\s+lol|damn\s+straight\s+chatgpt|^[ \u200e]*trust\s*$|^[ \u200e]*viking warrior quote\s*$|^delulu is the|^focus continuation|^visualize\s+all\s+scenarios|^exhaust yourself with)/i.test(
      low,
    )
  ) {
    return true;
  }

  /** Long pasted money affirmation caps */
  if (/i release it with joy|money flows to me in avalanches|constructively and judiciously/i.test(low)) {
    return true;
  }

  /** Mostly URL + no real sentence */
  if (t.length < 40 && /^https?:\/\//i.test(t) && !/[""\u201c]/.test(t)) return true;

  return false;
}

/** Direct patterns that `extractFromBlock` often misses (WhatsApp one-liners). */
function tryDirectQuotePairs(text) {
  const t = text.trim();
  const out = [];

  const said = t.match(/^(.{2,90}?)\s+said,\s+[\u201c"](.+)[\u201d"]\s*\.?\s*$/is);
  if (said) {
    out.push({
      quote: unwrapQuote(said[2]),
      author: sanitizeAuthor(said[1]),
    });
  }

  return out.filter((x) => x.quote.length >= 12);
}

function pushExtractedQuotes(fromBlocks, quotes, seenKeys, prefix) {
  const loneOuter = prefix === 'wa';
  let skipped = 0;
  for (let bi = 0; bi < fromBlocks.length; bi += 1) {
    const block = fromBlocks[bi];

    const directPairs = tryDirectQuotePairs(block);
    if (directPairs.length > 0) {
      let any = false;
      for (const pair of directPairs) {
        if (addQuoteRecord(pair.quote, pair.author, quotes, seenKeys, `${prefix}-${bi}`)) any = true;
      }
      if (!any) skipped += 1;
      continue;
    }

    const extracted = extractFromBlock(block, { loneOuterQuote: loneOuter });
    if (!extracted) {
      skipped += 1;
      continue;
    }
    if (!addQuoteRecord(extracted.quote, extracted.author, quotes, seenKeys, `${prefix}-${bi}`)) {
      skipped += 1;
    }
  }
  return skipped;
}

function addQuoteRecord(rawQuote, rawAuthor, quotes, seenKeys, idHint) {
  let quote = unwrapQuote(stripUrls(rawQuote.trim().replace(/\\+"/g, '"')));
  if (quote.length < 6 || isBlocklistedText(quote)) return false;

  /** Strip stray outer quotes duplication from WA */
  quote = unwrapQuote(quote.replace(/\\"/g, '"').replace(/"\s*\.{2,}$/, '...').trim());

  /** Drop trailing emoji clusters */
  quote = quote.replace(/\s*[\p{Extended_Pictographic}\uFE0F]+$/gu, '').trim();

  /** Plain-text minimum length (avoid “Strength and Honor”, “Trust”) */
  const hasQuoteMarks =
    /^["'`\u201c]/.test(rawQuote.trim()) ||
    /\u201c/.test(rawQuote) ||
    (rawQuote.includes('"') && /^[^"]*"[^"]*"/u.test(rawQuote));

  const minChars = hasQuoteMarks ? 10 : 28;
  const minKey = hasQuoteMarks ? 8 : 12;
  if (quote.length < minChars) return false;

  /** Attributed short lines ok */
  const key = normQuoteKey(quote);
  if (key.length < minKey || seenKeys.has(key)) return false;
  seenKeys.add(key);

  const author = sanitizeAuthor(rawAuthor);

  quotes.push({
    id: '',
    slug: slugFromQuote(quote) || `fragment-${idHint}`,
    quote,
    author,
    tags: [],
    word_count: quote.split(/\s+/).filter(Boolean).length,
    char_count: quote.length,
    length: lengthLabel(quote.length),
  });
  return true;
}

const dumpBlocks = paragraphs(fs.readFileSync(DUMP, 'utf8'));
const whatsappBlocks = fs.existsSync(WHATSAPP) ? parseWhatsAppToBlocks(fs.readFileSync(WHATSAPP, 'utf8')) : [];

const seenKeys = new Set();
const quotes = [];

const skippedDump = pushExtractedQuotes(dumpBlocks, quotes, seenKeys, 'dump');
const skippedWa = pushExtractedQuotes(whatsappBlocks, quotes, seenKeys, 'wa');

quotes.sort((a, b) => normQuoteKey(a.quote).localeCompare(normQuoteKey(b.quote)));

quotes.forEach((q, idx) => {
  q.id = `quote_${String(idx + 1).padStart(3, '0')}`;
});

const byCat = { general: [], stoicism: [], taoism: [], buddhism: [], existentialism: [] };
quotes.forEach((q) => {
  const cat = categorizeAuthor(q.author);
  q.tags = tagFor(cat);
  byCat[cat].push(q);
});

for (const k of Object.keys(byCat)) {
  byCat[k].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

console.log(
  `Parsed ${quotes.length} unique quotes. Skipped dump blocks: ${skippedDump}, WhatsApp blocks: ${skippedWa}.`,
);
for (const [k, arr] of Object.entries(byCat)) console.log(`  ${k}: ${arr.length}`);

fs.mkdirSync(OUTDIR, { recursive: true });
for (const [cat, arr] of Object.entries(byCat)) {
  fs.writeFileSync(path.join(OUTDIR, `${cat}.json`), JSON.stringify(arr, null, 2) + '\n', 'utf8');
}

console.log('Done.');
