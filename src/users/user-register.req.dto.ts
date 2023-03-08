import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Match } from "src/app.utils";

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
}