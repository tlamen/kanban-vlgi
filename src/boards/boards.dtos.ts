import { IsNotEmpty, MinLength } from "class-validator";

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  background: string;
}