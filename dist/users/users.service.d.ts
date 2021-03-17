import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly user;
    constructor(user: Repository<User>);
}
