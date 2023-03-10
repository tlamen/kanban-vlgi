import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validateUserCreds(email: string, password: string): Promise<User | undefined> {
        const user = await this.userService.findOne(email);

        if(!user) throw new BadRequestException();

        if (!bcrypt.compare(password, user.password))
            throw new UnauthorizedException(); 
        
        return user;
    }
}
