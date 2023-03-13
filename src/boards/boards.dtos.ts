import { IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  background: string;

  @IsNotEmpty()
  user_id: number;
}