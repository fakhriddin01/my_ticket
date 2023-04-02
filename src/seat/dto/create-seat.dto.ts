  import { ApiProperty } from "@nestjs/swagger";
  import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";
  
  

export class CreateSeatDto {
    @ApiProperty({example: '1', description: "Sector raqami"})
    @IsNotEmpty()
    @IsInt()
    sector: number;

    @ApiProperty({example: '1', description: "qator raqami"})
    @IsNotEmpty()
    @IsInt()
    row_number: number;

    @ApiProperty({example: '1', description: "Joy raqami"})
    @IsNotEmpty()
    @IsInt()
    number: number;

    @ApiProperty({example: '1', description: "Venue id raqami"})
    @IsNotEmpty()
    @IsInt()
    venue_id: number;

    @ApiProperty({example: '1', description: "Joy turi id raqami"})
    @IsNotEmpty()
    @IsInt()
    seat_type_id: number;

    
    @ApiProperty({example: '1', description: "Joy joylashuvi"})
    @IsNotEmpty()
    @IsString()
    location_in_schema: string;
}
