import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6,{message:"Minimum length of password is 6"})
    password:string;

}