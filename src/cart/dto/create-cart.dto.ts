import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateCartDto {

    @ApiProperty({example: '1', description: "ticket id nomeri"})
    @IsNotEmpty()
    @IsInt()
    ticket_id: number;

    @ApiProperty({example: '1', description: "Customer id nomeri"})
    @IsNotEmpty()
    @IsInt()
    customer_id: number;

    @ApiProperty({example: '1', description: "Status id nomeri"})
    @IsInt()
    status_id?: number;
}
