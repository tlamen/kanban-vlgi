import { Body, Controller, Get, Post  } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { User } from 'src/typeorm';
import { UsersService } from '../services/users.service';
import { ValidateUserDto, userRegisterRequestDto } from '../user.dtos';

@Controller('users')
export class UsersController {
    constructor (private userService: UsersService) {}

    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE) userRegister: userRegisterRequestDto,
    ): Promise<User> {
        return await this.userService.doUserRegistration(userRegister);
    }

    // @Post('/login')
    // async doUserLogin(
    //     @Body(SETTINGS.VALIDATION_PIPE) userLogin: ValidateUserDto,
    // ) {
    //     // console.log(userLogin);
    //     return await this.userService.validateUser(userLogin.email, userLogin.password);
    // }

    @Get('/index')
    getUsers() {
        return this.userService.getUsers();
    }
}
