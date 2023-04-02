import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, isEmail, IsInt} from "class-validator";

export class LoginUserDto {
    @ApiProperty({example: 'pa$$worD1234', description: "Customer paroli"})
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({example: 'user@mail.uz', description: "Customer emaili"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

}