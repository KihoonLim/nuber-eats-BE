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
exports.UpdateRestaurantDto = exports.UpdateRestaurantInputType = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_restaurant_dto_1 = require("./create-restaurant.dto");
let UpdateRestaurantInputType = class UpdateRestaurantInputType extends graphql_1.PartialType(create_restaurant_dto_1.CreateRestaurantDto) {
};
UpdateRestaurantInputType = __decorate([
    graphql_1.InputType()
], UpdateRestaurantInputType);
exports.UpdateRestaurantInputType = UpdateRestaurantInputType;
let UpdateRestaurantDto = class UpdateRestaurantDto {
};
__decorate([
    graphql_1.Field(type => Number),
    __metadata("design:type", Number)
], UpdateRestaurantDto.prototype, "id", void 0);
__decorate([
    graphql_1.Field(type => UpdateRestaurantInputType),
    __metadata("design:type", UpdateRestaurantInputType)
], UpdateRestaurantDto.prototype, "data", void 0);
UpdateRestaurantDto = __decorate([
    graphql_1.InputType()
], UpdateRestaurantDto);
exports.UpdateRestaurantDto = UpdateRestaurantDto;
//# sourceMappingURL=update-restaurant.dto.js.map