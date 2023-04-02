import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateDistrictDto {

    @ApiProperty({example: 'Yunusobod', description: "District nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '1', description: "Region id raqami"})
    @IsNotEmpty()
    @IsInt()
    region_id: number;
}
