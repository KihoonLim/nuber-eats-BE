import { CreateRestaurantDto } from './create-restaurant.dto';
declare const UpdateRestaurantInputType_base: import("@nestjs/common").Type<Partial<CreateRestaurantDto>>;
export declare class UpdateRestaurantInputType extends UpdateRestaurantInputType_base {
}
export declare class UpdateRestaurantDto {
    id: number;
    data: UpdateRestaurantInputType;
}
export {};
