import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';


@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService){}

  @Query(returns => Boolean)
  hi() {
    return false;
  }

  @Mutation(returns => CreateAccountOutput)
  createAccount(@Args('input') createAccountInput: CreateAccountInput) {
    
  }
}