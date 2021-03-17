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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const restaurant_entity_1 = require("./entities/restaurant.entity");
const create_restaurant_dto_1 = require("./dtos/create-restaurant.dto");
const restaurants_service_1 = require("./restaurants.service");
const update_restaurant_dto_1 = require("./dtos/update-restaurant.dto");
let RestaurantsResolver = class RestaurantsResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    restaurants() {
        return this.restaurantService.getAll();
    }
    async creatRestaurant(CreateRestaurantDto) {
        try {
            await this.restaurantService.createRestaurant(CreateRestaurantDto);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async updateRestaurant(UpdateRestaurantDto) {
        try {
            await this.restaurantService.updateRestaurant(UpdateRestaurantDto);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
__decorate([
    graphql_1.Query(returns => [restaurant_entity_1.Restaurant]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "restaurants", null);
__decorate([
    graphql_1.Mutation(returns => Boolean),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "creatRestaurant", null);
__decorate([
    graphql_1.Mutation(returns => Boolean),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_restaurant_dto_1.UpdateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "updateRestaurant", null);
RestaurantsResolver = __decorate([
    graphql_1.Resolver(of => restaurant_entity_1.Restaurant),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantService])
], RestaurantsResolver);
exports.RestaurantsResolver = RestaurantsResolver;
//# sourceMappingURL=restaurants.resolver.js.map