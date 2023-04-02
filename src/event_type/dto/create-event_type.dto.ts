import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateEventTypeDto {

    @ApiProperty({example: 'footbol', description: "Event turining nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '1', description: "Event turining id si"})
    @IsInt()
    parent_id?: number;
}
