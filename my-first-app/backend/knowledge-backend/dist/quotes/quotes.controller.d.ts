import { CreateQuoteDto } from './dto/create-quote.dto.js';
import { UpdateQuoteDto } from './dto/update-quote.dto.js';
import { QuotesService } from './quotes.service.js';
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    create(createQuoteDto: CreateQuoteDto): Promise<CreateQuoteDto & import("./entities/quote.entity.js").Quote>;
    findAll(): Promise<import("./entities/quote.entity.js").Quote[]>;
    findGeneral(): Promise<import("./entities/quote.entity.js").Quote[]>;
    findCategory(category: string): Promise<import("./entities/quote.entity.js").Quote[]>;
    findOne(id: string): Promise<import("./entities/quote.entity.js").Quote | null>;
    update(id: string, updateQuoteDto: UpdateQuoteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
