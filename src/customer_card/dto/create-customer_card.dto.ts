import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateCustomerCardDto {

    @ApiProperty({example: 'IpotekaBank', description: "Karta nomi"})
    @IsString()
    name?: string;

    @ApiProperty({example: '+998909998877', description: "Karta boglangan raqam"})
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({example: '8600111122223333', description: "Karta raqami"})
    @IsNotEmpty()
    @IsString()
    number: string;

    @ApiProperty({example: '2024', description: "Karta amal qilish yili"})
    @IsNotEmpty()
    @IsString()
    year: string;

    @ApiProperty({example: '04', description: "Karta amal qilish oyi"})
    @IsNotEmpty()
    @IsString()
    month: string;

    @ApiProperty({example: 'true', description: "Karta activligi"})
    @IsBoolean()
    is_active?: boolean;

    @ApiProperty({example: 'true', description: "Karta asosiyligi"})
    @IsBoolean()
    is_main?: boolean;

    @ApiProperty({example: '1', description: "Customer id raqami"})
    @IsNotEmpty()
    @IsInt()
    customer_id: number;
}
