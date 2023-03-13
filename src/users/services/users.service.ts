import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { bcryptPassword } from 'src/app.utils';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { userRegisterRequestDto } from '../user.dtos';
import * as bcrypt from 'bcrypt';

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
        user.image = userRegister.image;
        return await user.save();
    }

    // async validateUser(email: string, pass: string): Promise<any> {
    //     const user = await this.findOne(email);
    //     const isPasswordMatching = await bcrypt.compare(pass, user.password);
    //     if (user && isPasswordMatching) {
    //       const { password, ...result } = user;
    //       return result;
    //     }
    //     throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    // }
}
