import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';

@Resolver(of => Restaurant)
export class RestaurantsResolver {
  constructor(private restaurantService: RestaurantService){}

  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(returns => Boolean)
  async creatRestaurant(  @Args('input') CreateRestaurantDto: CreateRestaurantDto): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(CreateRestaurantDto);
      return true;
    } catch (err) {
      return false;
    }
  }

  @Mutation(returns => Boolean)
  async updateRestaurant (
    @Args('input') UpdateRestaurantDto: UpdateRestaurantDto
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(UpdateRestaurantDto);
      return true;
    } catch (e){
      console.log(e);
      return false;
    }
  }

}