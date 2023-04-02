import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, isEmail, IsInt} from "class-validator";

export class UpdateCustomerDto{

    @ApiProperty({example: 'Fakhriddin', description: "Cutomer Ismi"})
    @IsNotEmpty()
    @IsString()
    first_name?: string;

    @ApiProperty({example: 'Abduraimov', description: "Cutomer familiyasi"})
    @IsNotEmpty()
    @IsString()
    last_name?: string;

    @ApiProperty({example: '+998901112233', description: "Cutomer tel raqami"})
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({example: 'user@mail.uz', description: "Customer emaili"})
    @IsNotEmpty()
    @IsEmail()
    email?: string;

    @ApiProperty({example: '1990-12-31', description: "Customer tugulgan sana"})
    @IsNotEmpty()
    @IsEmail()
    birthday?: Date;

    @ApiProperty({example: 'male', description: "Customer jinsi male/female"})
    @IsNotEmpty()
    @IsString()
    gender?: string;

    @ApiProperty({example: '1', description: "Customer tanlagan til id si"})
    @IsNotEmpty()
    @IsInt()
    lang_id?: number;
}
