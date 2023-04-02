import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateVenueDto {
    @ApiProperty({example: 'Bunyodkor', description: "Obyekt nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: 'Bunyodkor str. 22', description: "addresi"})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: 'lat: 65.12233/lon: 12.123123', description: "Obyekt lokatsiyasi"})
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({example: 'www.bunyodkor.uz', description: "Obyekt web sayti"})
    @IsString()
    site?: string;

    @ApiProperty({example: '+998909991122', description: "Obyekt telefon raqami"})
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({example: '1-100', description: "Obyekt schemasi"})
    @IsPhoneNumber()
    schema: string;

    @ApiProperty({example: '1', description: "district id nomeri"})
    @IsNotEmpty()
    @IsInt()
    district_id: number;
}
