import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../local-auth.guard';
import { AuthService } from '../services/services.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.generateToken(req.user)
    }
}
