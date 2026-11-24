import { QuotesService } from './quotes.service.js';
import { CreateQuoteDto } from './dto/create-quote.dto.js';
import { UpdateQuoteDto } from './dto/update-quote.dto.js';
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    create(createQuoteDto: CreateQuoteDto): Promise<CreateQuoteDto & import("./entities/quote.entity.js").Quote>;
    findAll(): Promise<import("./entities/quote.entity.js").Quote[]>;
    findOne(id: string): Promise<import("./entities/quote.entity.js").Quote | null>;
    update(id: string, updateQuoteDto: UpdateQuoteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
