import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateRegionDto {
    @ApiProperty({example: 'Toshkent', description: "Region nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '1', description: "Country id nomeri"})
    @IsNotEmpty()
    @IsInt()
    country_id: number;
}
