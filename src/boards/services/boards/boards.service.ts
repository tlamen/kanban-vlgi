import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from 'src/boards/boards.dtos';
import { Board } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board) private readonly boardRepository: Repository<Board>,
    ) {}

    createBoard(createBoardDto: CreateBoardDto) {
        const newBoard = this.boardRepository.create(createBoardDto);
        return this.boardRepository.save(newBoard)
    }
}
