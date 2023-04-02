import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateVenueTypeDto {
    
    @ApiProperty({example: 'Sport', description: "Venue turi nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
