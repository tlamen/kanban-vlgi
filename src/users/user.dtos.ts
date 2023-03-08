import { IsEmail, IsNotEmpty, MinLength, Length } from "class-validator";
import { Match } from "src/app.utils";

export class ValidateUserDto {
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class userRegisterRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @Length(6, 24)
  password: string;

  @IsNotEmpty()
  @Length(6, 24)
  @Match('password')
  confirm: string;

  @IsNotEmpty()
  image: string;
}