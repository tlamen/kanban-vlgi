import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
