import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards/boards.controller';
import { BoardsService } from './services/boards/boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
