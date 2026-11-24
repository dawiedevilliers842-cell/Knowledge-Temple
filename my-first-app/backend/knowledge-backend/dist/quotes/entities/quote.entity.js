var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
let Quote = class Quote {
    id;
    slug;
    quote;
    author;
    tags;
    word_count;
    char_count;
    length;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Quote.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Quote.prototype, "slug", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Quote.prototype, "quote", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Quote.prototype, "author", void 0);
__decorate([
    Column('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], Quote.prototype, "tags", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Quote.prototype, "word_count", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Quote.prototype, "char_count", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Quote.prototype, "length", void 0);
Quote = __decorate([
    Entity()
], Quote);
export { Quote };
//# sourceMappingURL=quote.entity.js.map