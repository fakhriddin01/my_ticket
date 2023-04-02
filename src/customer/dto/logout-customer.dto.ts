import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, isEmail, IsInt} from "class-validator";

export class LogoutUserDto {
    @ApiProperty({example: 'refresh token', description: "Customer tokeni"})
    @IsNotEmpty()
    @IsString()
    refreshToken: string;
}