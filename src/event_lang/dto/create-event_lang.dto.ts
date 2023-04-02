import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateEventLangDto {
    @ApiProperty({example: '1', description: "tilning id nomeri"})
    @IsNotEmpty()
    @IsInt()
    lang_id: number;

    @ApiProperty({example: '1', description: "eventning id nomeri"})
    @IsNotEmpty()
    @IsInt()
    event_id: number;
}
