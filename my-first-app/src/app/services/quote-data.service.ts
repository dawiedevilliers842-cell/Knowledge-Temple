import { Injectable } from '@angular/core';
import type { QuoteRecord, QuotesManifest } from '../pages/three-playground/models/quote.types';

@Injectable({ providedIn: 'root' })
export class QuoteDataService {
  async loadAll(quotesBase = './quotes/'): Promise<QuoteRecord[]> {
    const manifestResponse = await fetch(`${quotesBase}manifest.json`);
    if (!manifestResponse.ok) {
      throw new Error(`Failed to load quote manifest (${manifestResponse.status})`);
    }

    const manifest = (await manifestResponse.json()) as QuotesManifest;
    const bundles = await Promise.all(
      manifest.sources.map(async (relativePath) => {
        const url = `${quotesBase}${relativePath.replace(/^\/+/, '')}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load quote bundle (${response.status}): ${url}`);
        }
        return response.json() as Promise<QuoteRecord[]>;
      }),
    );

    const quotes = bundles.flat();
    quotes.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

    const seenIds = new Set<string>();
    for (const quote of quotes) {
      if (seenIds.has(quote.id)) {
        console.warn(`Duplicate quote id in merged bundles: ${quote.id}`);
      }
      seenIds.add(quote.id);
    }

    return quotes;
  }
}
