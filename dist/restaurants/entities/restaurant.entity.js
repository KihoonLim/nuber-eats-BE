"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Restaurant = class Restaurant {
};
__decorate([
    graphql_1.Field(is => Number),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Restaurant.prototype, "id", void 0);
__decorate([
    graphql_1.Field(is => String),
    typeorm_1.Column(),
    class_validator_1.IsString(),
    class_validator_1.Length(5),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    graphql_1.Field(is => Boolean, { nullable: true }),
    typeorm_1.Column({ default: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Restaurant.prototype, "isVegan", void 0);
__decorate([
    graphql_1.Field(type => String, { defaultValue: '강남' }),
    typeorm_1.Column(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Restaurant.prototype, "address", void 0);
Restaurant = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Restaurant);
exports.Restaurant = Restaurant;
//# sourceMappingURL=restaurant.entity.js.map