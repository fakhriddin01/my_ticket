import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateSeatTypeDto {
    @ApiProperty({example: 'VIP', description: "o`ridiq turi nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
