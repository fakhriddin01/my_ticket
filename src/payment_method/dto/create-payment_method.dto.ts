import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreatePaymentMethodDto {
    @ApiProperty({example: 'Payme', description: "to`lov usuli"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
