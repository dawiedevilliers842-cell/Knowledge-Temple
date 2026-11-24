var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SeedService_1;
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import buddhismData from '../data/quotes/categories/buddhism.json' with { type: "json" };
import existentialismData from '../data/quotes/categories/existentialism.json' with { type: "json" };
import generalData from '../data/quotes/categories/general.json' with { type: "json" };
import stoicismData from '../data/quotes/categories/stoicism.json' with { type: "json" };
import taoismData from '../data/quotes/categories/taoism.json' with { type: "json" };
import { Quote } from '../quotes/entities/quote.entity.js';
let SeedService = SeedService_1 = class SeedService {
    quoteRepository;
    logger = new Logger(SeedService_1.name);
    constructor(quoteRepository) {
        this.quoteRepository = quoteRepository;
    }
    async seed() {
        this.logger.log('Seeding users from JSON...');
        await this.quoteRepository.upsert(buddhismData, ['id']);
        await this.quoteRepository.upsert(existentialismData, ['id']);
        await this.quoteRepository.upsert(generalData, ['id']);
        await this.quoteRepository.upsert(stoicismData, ['id']);
        await this.quoteRepository.upsert(taoismData, ['id']);
        this.logger.log(`Seeded ${buddhismData.length} users successfully.`);
    }
};
SeedService = SeedService_1 = __decorate([
    Injectable(),
    __param(0, InjectRepository(Quote)),
    __metadata("design:paramtypes", [Repository])
], SeedService);
export { SeedService };
//# sourceMappingURL=seed.service.js.map