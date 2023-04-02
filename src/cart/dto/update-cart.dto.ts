
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class UpdateCartDto {
    @ApiProperty({example: '1', description: "ticket id nomeri"})
    @IsInt()
    ticket_id?: number;

    @ApiProperty({example: '1', description: "Customer id nomeri"})
    @IsInt()
    customer_id?: number;

    @ApiProperty({example: '1', description: "Status id nomeri"})
    @IsInt()
    status_id?: number;

    @ApiProperty({example: '1', description: "tugash vaqtini null qilish uchun"})
    finishedAt?: Date;
}
