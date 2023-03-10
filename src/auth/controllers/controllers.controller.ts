import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { LocalAuthGuard } from '../local-auth.guard';
import { AuthService } from '../services/services.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<any> {
        return this.authService.generateToken(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
        return req.user;
    }
}
