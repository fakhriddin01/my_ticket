import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateDiscountDto {
    @ApiProperty({example: 'Cashback', description: "discount nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '0.5', description: "discount miqdori"})
    @IsNotEmpty()
    @IsInt()
    discount: number;
}
