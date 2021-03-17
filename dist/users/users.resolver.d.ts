import { CreateAccountInput } from './dtos/create-account.dto';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UsersService);
    hi(): boolean;
    createAccount(createAccountInput: CreateAccountInput): void;
}
