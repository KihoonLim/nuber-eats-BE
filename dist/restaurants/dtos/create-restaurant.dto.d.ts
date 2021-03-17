import { Restaurant } from '../entities/restaurant.entity';
declare const CreateRestaurantDto_base: import("@nestjs/common").Type<Pick<Restaurant, "name" | "isVegan" | "address">>;
export declare class CreateRestaurantDto extends CreateRestaurantDto_base {
}
export {};
