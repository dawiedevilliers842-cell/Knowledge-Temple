import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto.js';
import { UpdateQuoteDto } from './dto/update-quote.dto.js';
import { QuotesService } from './quotes.service.js';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) { }

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.create(createQuoteDto);
  }

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Get('category')
  findGeneral() {
    return this.quotesService.findCategory('');
  }

  @Get('category/:category')
  findCategory(@Param('category') category: string) {
    return this.quotesService.findCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(+id);
  }
}
