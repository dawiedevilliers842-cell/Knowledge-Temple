import { HubTextureTheme } from "../../../three/textures/hub-procedural-textures";


export interface QuoteRecord {
  id: string;
  slug: string;
  quote: string;
  author: string;
  tags: string[];
  word_count: number;
  char_count: number;
  length: string;
}

/** Lists quote bundle files relative to `/quotes/`. Edit to add/remove category files. */
export interface QuotesManifest {
  version?: number;
  sources: string[];
}

/** Canonical cluster ids matching `quotes/categories/*.json` tag names; anything else ⇒ aether hub. */
export type QuoteClusterId = 'aether' | 'stoicism' | 'taoism' | 'buddhism' | 'existentialism';

export const QUOTE_CLUSTER_ORDER: readonly QuoteClusterId[] = [
  'aether',
  'stoicism',
  'taoism',
  'buddhism',
  'existentialism',
];

export const CLUSTER_HUB_COLOR: Record<QuoteClusterId, string> = {
  aether: '#4f6cae',
  stoicism: '#5fa8dc',
  taoism: '#5eb89a',
  buddhism: '#c8935f',
  existentialism: '#9b72cf',
};

/** Procedural hub textures — one theme per cluster so you can compare vibes in-scene. */
export const CLUSTER_HUB_TEXTURE: Record<QuoteClusterId, HubTextureTheme> = {
  aether: 'nebula',
  stoicism: 'marble',
  taoism: 'water',
  buddhism: 'woven',
  existentialism: 'crystal',
};

/** Corner satellites (aether stays at origin). Order maps to far “corners” of the volume. */
export const CLUSTER_CORNER: Record<
  Exclude<QuoteClusterId, 'aether'>,
  readonly [number, number, number]
> = {
  stoicism: [1, 1, 1],
  taoism: [-1, -0.85, 1],
  buddhism: [1, -0.9, -1],
  existentialism: [-1, 1, -1],
};

export const CAMERA_POSITIONS: Record<
  QuoteClusterId,
  readonly [number, number, number]
> = {
  aether: [3.33, 0.1, 0.2],
  stoicism: [12.14, 3.12, 9.86],
  taoism: [-9.49, -2.79, 11.75],
  buddhism: [11.15, -2.83, -9.41],
  existentialism: [-12.48, 3.15, -9.70],
};

export function quoteClusterId(q: QuoteRecord): QuoteClusterId {
  const t = q.tags?.[0];
  if (
    typeof t === 'string' &&
    (QUOTE_CLUSTER_ORDER as readonly string[]).includes(t as QuoteClusterId)
  ) {
    return t as QuoteClusterId;
  }
  return 'aether';
}

export function stringToHue(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return (Math.abs(hash) % 360) / 360;
}
