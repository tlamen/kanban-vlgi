import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { bcryptPassword } from 'src/app.utils';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { userRegisterRequestDto } from '../user-register.req.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}

    getUsers() {
        return this.userRepository.find();
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ 
            where: {
                email,
            },
        });
    }

    async doUserRegistration(userRegister: userRegisterRequestDto): Promise<User> {
        
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;
        return await user.save();
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.findOne(username);
        const crypted_password = await bcryptPassword(user)
        if (user && crypted_password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
}
