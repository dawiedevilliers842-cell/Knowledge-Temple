import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto.js';
import { UpdateQuoteDto } from './dto/update-quote.dto.js';
import { Quote } from './entities/quote.entity.js';
export declare class QuotesService {
    private quoteRepository;
    constructor(quoteRepository: Repository<Quote>);
    create(createQuoteDto: CreateQuoteDto): Promise<CreateQuoteDto & Quote>;
    findAll(): Promise<Quote[]>;
    findOne(id: number): Promise<Quote | null>;
    findCategory(category: string): Promise<Quote[]>;
    update(id: number, updateQuoteDto: UpdateQuoteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
