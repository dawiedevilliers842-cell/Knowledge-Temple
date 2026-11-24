var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Quote } from './quotes/entities/quote.entity.js';
import { QuotesModule } from './quotes/quotes.module.js';
import { SeedService } from './seed/seed.service.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ObserveModule.forRoot({
                appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
                appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
                serviceId: 'knowledge-backend',
            }),
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST ?? 'localhost',
                port: parseInt(process.env.DB_PORT ?? '5432'),
                username: process.env.DB_USERNAME ?? 'postgres',
                password: process.env.DB_PASSWORD ?? 'localpassword',
                database: process.env.DB_NAME ?? 'knowledge',
                entities: [Quote],
                synchronize: true,
            }),
            QuotesModule,
        ],
        controllers: [AppController],
        providers: [AppService, SeedService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map