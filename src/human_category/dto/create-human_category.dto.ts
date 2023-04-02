import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateHumanCategoryDto {
    @ApiProperty({example: 'Yoshlar', description: "Kategoriya nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '18', description: "yosh chegarasi min"})
    @IsNotEmpty()
    @IsInt()
    start_age: number;

    @ApiProperty({example: '70', description: "yosh chegarasi max"})
    @IsNotEmpty()
    @IsInt()
    finish_age: number;

    @ApiProperty({example: 'male', description: "jinsi"})
    @IsNotEmpty()
    @IsString()
    gender: string;
}
