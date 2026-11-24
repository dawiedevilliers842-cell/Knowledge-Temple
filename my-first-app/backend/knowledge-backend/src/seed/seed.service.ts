import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import buddhismData from '../data/quotes/categories/buddhism.json' with { type: "json" };
import existentialismData from '../data/quotes/categories/existentialism.json' with { type: "json" };
import generalData from '../data/quotes/categories/general.json' with { type: "json" };
import stoicismData from '../data/quotes/categories/stoicism.json' with { type: "json" };
import taoismData from '../data/quotes/categories/taoism.json' with { type: "json" };
// import allQuotes from '../data/quotes/manifest.json' with { type: "json" };

import { Quote } from '../quotes/entities/quote.entity.js';

@Injectable()
export class SeedService {

    private readonly logger = new Logger(SeedService.name);

    constructor(
        @InjectRepository(Quote)
        private readonly quoteRepository: Repository<Quote>,
    ) { }

    async seed() {
        this.logger.log('Seeding users from JSON...');

        // upsert updates existing records by conflict path ('email') or inserts new ones
        await this.quoteRepository.upsert(buddhismData, ['id']);
        await this.quoteRepository.upsert(existentialismData, ['id']);
        await this.quoteRepository.upsert(generalData, ['id']);
        await this.quoteRepository.upsert(stoicismData, ['id']);
        await this.quoteRepository.upsert(taoismData, ['id']);

        this.logger.log(`Seeded ${buddhismData.length} users successfully.`);
    }

}
