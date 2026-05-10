/**
 * Keyword-match quotes in categories/general.json and move them into stoicism /
 * taoism / buddhism / existentialism (update tags).
 * Drops rows whose text already exists elsewhere (dedupe).
 * Run: node scripts/recategorize-general-keywords.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CAT_DIR = path.join(__dirname, '..', 'public', 'quotes', 'categories');

const FILES = {
  general: 'general.json',
  stoicism: 'stoicism.json',
  taoism: 'taoism.json',
  buddhism: 'buddhism.json',
  existentialism: 'existentialism.json',
};

const RULES = [
  {
    cat: 'stoicism',
    patterns: [
      /\b(seneca|epictetus|marcus aurelius|musonius|cleanthes|zeno of citium|hierocles|cato the younger|\bcato\b|cassius)\b/i,
      /\b(meditations|enchiridion|dichotomy of control|amor fati|memento mori|premeditatio malorum)\b/i,
      /\b(obstacle is the way|daily stoic|ryan holiday)/i,
      /\b(stoa|stoic|stoicism)\b/i,
      /\b(plato|cicero).*virtue\b/i,
    ],
  },
  {
    cat: 'taoism',
    patterns: [
      /\b(lao[- ]?tzu|laozi|zhuang[- ]?zi|chuang[- ]?tzu|tao te ching|daodejing)\b/i,
      /\b(wei wu wei|yin and yang|wu wei|ten thousand things|three treasures)\b/i,
      /\b(tao|dao)\b(?:\s+te)?/i,
    ],
  },
  {
    cat: 'buddhism',
    patterns: [
      /\b(buddha|bodhidharma|siddhartha|dhammapada|zen master|thich nhat|dalai lama|samsara|nirvana|dukkha|noble truth|sangha)\b/i,
      /\b(bodhi\b|bodhisattva|vipassana|metta\b|chakra|mudra|zazen)/i,
      /\b(alan watts|upanishads?|lotus sutra)/i,
    ],
  },
  {
    cat: 'existentialism',
    patterns: [
      /\b(camus|sartre|kierkegaard|nietzsche|frankl|de beauvoir|heidegger|jaspers|buber)\b/i,
      /\b(dostoevsk|kafka|kafkaesque)/i,
      /\b(existential|absurdism|authenticity|being and nothingness|will to power|eternal return)\b/i,
      /\bibsen|kirkegard/i,
    ],
  },
];

function normKey(q) {
  return `${q.quote || ''}\n${q.author || ''}`.toLowerCase().replace(/\s+/g, ' ').trim();
}

function classify(blob) {
  for (const { cat, patterns } of RULES) {
    for (const re of patterns) {
      if (re.test(blob)) return cat;
    }
  }
  return null;
}

function tagFor(cat) {
  return [cat];
}

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(CAT_DIR, name), 'utf8'));
}

function save(name, data) {
  fs.writeFileSync(path.join(CAT_DIR, name), JSON.stringify(data, null, 2) + '\n', 'utf8');
}

let general = load(FILES.general);
const buckets = {
  stoicism: load(FILES.stoicism),
  taoism: load(FILES.taoism),
  buddhism: load(FILES.buddhism),
  existentialism: load(FILES.existentialism),
};

const existingKeys = new Set();
for (const cat of Object.keys(buckets)) {
  for (const q of buckets[cat]) existingKeys.add(normKey(q));
}

let moved = 0;
let droppedDup = 0;
const nextGeneral = [];

for (const q of general) {
  const key = normKey(q);
  if (existingKeys.has(key)) {
    droppedDup += 1;
    continue;
  }

  const hit = classify(`${q.quote}\n${q.author}`);
  if (hit && buckets[hit]) {
    buckets[hit].push({ ...q, tags: tagFor(hit) });
    existingKeys.add(key);
    moved += 1;
    continue;
  }

  nextGeneral.push(q);
}

for (const cat of Object.keys(buckets)) {
  buckets[cat].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}
nextGeneral.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

save(FILES.general, nextGeneral);
for (const [cat, rows] of Object.entries(buckets)) {
  save(FILES[cat], rows);
}

console.log(`Moved ${moved} quotes from general into keyword-matched categories.`);
console.log(`Dropped ${droppedDup} duplicates already present in a category.`);
for (const [cat, rows] of Object.entries(buckets)) {
  console.log(`  ${cat}: ${rows.length}`);
}
console.log(`  general left: ${nextGeneral.length}`);
