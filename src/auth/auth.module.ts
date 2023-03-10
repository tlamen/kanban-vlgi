import { Module } from '@nestjs/common';
import { AuthService } from './services/services.service';
import { AuthController } from './controllers/controllers.controller';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: process.env.secret_key,
      signOptions: {expiresIn: '1d'},

  })],
})
export class AuthModule {}
