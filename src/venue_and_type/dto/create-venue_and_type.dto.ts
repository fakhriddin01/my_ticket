import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateVenueAndTypeDto {
    @ApiProperty({example: '1', description: "Venue turi id nomeri"})
    @IsNotEmpty()
    @IsInt()
    venue_type_id: number;

    @ApiProperty({example: '1', description: "Venue id nomeri"})
    @IsNotEmpty()
    @IsInt()
    venue_id: number;
}
