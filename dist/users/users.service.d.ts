import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<User>);
    createAccount({ email, password, role }: CreateAccountInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    login({ email, password }: LoginInput): Promise<{
        ok: boolean;
        error?: string;
        token?: string;
    }>;
}
