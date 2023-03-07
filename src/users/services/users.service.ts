import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';

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
}
