import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService
  ) { }

  async createAccount({ email, password, role }: CreateAccountInput): Promise<{ok: boolean; error?: string}> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return { ok: false, error: 'THere is a user with that email already' };
      }

      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };

    } catch (e) {
      return { ok: false, error: 'Couldn\'t create account' };
    }
  }

  async login({ email, password }: LoginInput): Promise<{ok: boolean, error?: string, token?: string}> {
    try {
      const user = await this.users.findOne({ email });
      console.log(1111, user);

      if (!user){
        return {
          ok: false,
          error: 'User not found'
        };
      }
      const passwordCorrect = await user.checkPassword(password);
      if (!passwordCorrect){
        return {
          ok: false,
          error: 'Wrong password'
        };
      }
      console.log(2222, passwordCorrect);

      const token = this.jwtService.sign( user.id );

      return {
        ok: true,
        token
      };
    } catch (error){
      return { ok: false, error };
    }
  }
}