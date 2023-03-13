import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/typeorm';
import { BoardsController } from './controllers/boards/boards.controller';
import { BoardsService } from './services/boards/boards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
