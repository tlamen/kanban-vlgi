import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBoardDto } from 'src/boards/boards.dtos';
import { BoardsService } from 'src/boards/services/boards/boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardService: BoardsService) {}

    @Get('id/:id')
    findBoardById(@Param('id', ParseIntPipe) id: number) {
        return this.boardService.findBoardsById(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto) {
        return this.boardService.createBoard(CreateBoardDto);
    }
}
