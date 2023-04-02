import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class UpdateBookingDto {
    @ApiProperty({example: '1', description: "Cart id nomeri"})
    @IsNotEmpty()
    @IsInt()
    cart_id?: number;

    @ApiProperty({example: '1', description: "Payment id nomeri"})
    @IsNotEmpty()
    @IsInt()
    payment_method_id?: number;

    @ApiProperty({example: '1', description: "Discount id nomeri"})
    @IsInt()
    discount_id?: number;

    @ApiProperty({example: 'true', description: "Yetkazib berish bormi?"})
    @IsBoolean()
    isDelivery?: boolean;

    @ApiProperty({example: 'true', description: "Statusi"})
    @IsInt()
    status_id?: number;
}
