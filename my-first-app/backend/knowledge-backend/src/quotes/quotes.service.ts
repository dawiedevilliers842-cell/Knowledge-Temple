import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto.js';
import { UpdateQuoteDto } from './dto/update-quote.dto.js';
import { Quote } from './entities/quote.entity.js';

@Injectable()
export class QuotesService {

  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) { }

  create(createQuoteDto: CreateQuoteDto) {
    return this.quoteRepository.save(createQuoteDto);
  }

  findAll() {
    return this.quoteRepository.find();
  }

  findOne(id: number) {
    return this.quoteRepository.findOneBy({ id });
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return this.quoteRepository.update({ id }, updateQuoteDto);
  }

  remove(id: number) {
    return this.quoteRepository.delete({ id });
  }
}
