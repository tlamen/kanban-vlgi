import { Body, Controller, Post  } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { User } from 'src/typeorm';
import { UsersService } from '../services/users.service';
import { userRegisterRequestDto } from '../user-register.req.dto';

@Controller('users')
export class UsersController {
    constructor (private userService: UsersService) {}

    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE) userRegister: userRegisterRequestDto,
    ): Promise<User> {
        console.log(userRegister);
        return await this.userService.doUserRegistration(userRegister);
    }
}
