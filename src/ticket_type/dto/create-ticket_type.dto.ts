import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateTicketTypeDto {
    @ApiProperty({example: 'VIP', description: "Ticket turi nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: 'sariq', description: "Ticket rangi"})
    @IsNotEmpty()
    @IsString()
    color: string;
}
