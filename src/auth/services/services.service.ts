import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);

        if(!user) { throw new BadRequestException(); }

        if (! (await bcrypt.compare(password, user.password) )) {
            console.log("service");
            throw new UnauthorizedException(); 
        }
            
        
        return user;
    }

    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.id,
            }),
        }
    }
}
