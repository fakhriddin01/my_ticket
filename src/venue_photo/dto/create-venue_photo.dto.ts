import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";


export class CreateVenuePhotoDto {
    @ApiProperty({example: '1', description: "venue id nomeri"})
    @IsNotEmpty()
    @IsInt()
    venue_id: number;

    @ApiProperty({example: 'https://www.google.com/rasm', description: "Venue rasm urli"})
    @IsNotEmpty()
    @IsString()
    url: string;
}
