import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({example: 'uzbek', description: "Til ni kiritish"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
