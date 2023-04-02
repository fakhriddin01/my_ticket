import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateStatusDto {
    @ApiProperty({example: 'open', description: "status nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
