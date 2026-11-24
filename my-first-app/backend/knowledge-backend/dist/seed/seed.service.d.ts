import { Repository } from 'typeorm';
import { Quote } from '../quotes/entities/quote.entity.js';
export declare class SeedService {
    private readonly quoteRepository;
    private readonly logger;
    constructor(quoteRepository: Repository<Quote>);
    seed(): Promise<void>;
}
