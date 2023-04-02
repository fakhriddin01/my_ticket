import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateTicketDto {
    @ApiProperty({example: '1', description: "Event id nomeri"})
    @IsNotEmpty()
    @IsInt()
    event_id: number;
    @ApiProperty({example: '1', description: "o`rindiq id nomeri"})
    @IsNotEmpty()
    @IsInt()
    seat_id: number;

    @ApiProperty({example: '20000', description: "narxi"})
    @IsNotEmpty()
    @IsInt()
    price: number;

    @ApiProperty({example: '0.5', description: "xizmat haqqi % da"})
    @IsNotEmpty()
    @IsInt()
    service_fee: number;

    @ApiProperty({example: '1', description: "status id nomeri"})
    @IsNotEmpty()
    @IsInt()
    status_id: number;

    @ApiProperty({example: '1', description: "ticket turi id nomeri"})
    @IsNotEmpty()
    @IsInt()
    ticket_type_id: number;
}
