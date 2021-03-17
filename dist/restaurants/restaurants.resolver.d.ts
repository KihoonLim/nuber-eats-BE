import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantsResolver {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    restaurants(): Promise<Restaurant[]>;
    creatRestaurant(CreateRestaurantDto: CreateRestaurantDto): Promise<boolean>;
    updateRestaurant(UpdateRestaurantDto: UpdateRestaurantDto): Promise<boolean>;
}
