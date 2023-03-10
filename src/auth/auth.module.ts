import { Module } from '@nestjs/common';
import { AuthService } from './services/services.service';
import { AuthController } from './controllers/controllers.controller';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  imports: [UsersModule],
})
export class AuthModule {}
