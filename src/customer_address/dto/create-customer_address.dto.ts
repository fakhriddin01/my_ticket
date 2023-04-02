import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateCustomerAddressDto {
    @ApiProperty({example: '1', description: "Customer id nomeri"})
    @IsNotEmpty()
    @IsInt()
    customer_id: number;

    @ApiProperty({example: 'Uy', description: "Customer manzil nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '1', description: "Davlat id nomeri"})
    @IsNotEmpty()
    @IsInt()
    country_id: number;

    @ApiProperty({example: '1', description: "Region id nomeri"})
    @IsNotEmpty()
    @IsInt()
    region_id?: number;

    @ApiProperty({example: '1', description: "District id nomeri"})
    @IsNotEmpty()
    @IsInt()
    district_id?: number;

    @ApiProperty({example: 'Bunyodkor', description: "Kucha nomi"})
    @IsNotEmpty()
    @IsString()
    street: string;

    @ApiProperty({example: '1a', description: "Uy raqami"})
    @IsNotEmpty()
    @IsString()
    house: string;

    @ApiProperty({example: '1', description: "Xonadon raqami"})
    @IsNotEmpty()
    @IsString()
    flat?: string;

    @ApiProperty({example: 'lat:64.123132/lon:12.23131', description: "locatsiyasi"})
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({example: '100000', description: "pochta indexi"})
    @IsNotEmpty()
    @IsString()
    post_index: string;

    @ApiProperty({example: 'to`liq malumot', description: "toliq malumot"})
    @IsNotEmpty()
    @IsString()
    info?: string; 
}
