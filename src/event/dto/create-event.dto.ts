import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, IsInt, IsBoolean} from "class-validator";

export class CreateEventDto {

    @ApiProperty({example: 'Footbol', description: "Event nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '2023-04-31', description: "Event boshlanish kuni"})
    @IsNotEmpty()
    @IsDate()
    start_date: Date;

    @ApiProperty({example: '20:00', description: "Event boshlanish vaqti"})
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({example: '2023-04-31', description: "Event tugash kuni"})
    @IsNotEmpty()
    @IsDate()
    finish_date: Date;

    @ApiProperty({example: '20:00', description: "Event tugash vaqti"})
    @IsNotEmpty()
    @IsString()
    finish_time: string;

    @ApiProperty({example: 'Bunyodkor-Paxtakor', description: "Event haqida malumot"})
    @IsString()
    info?: string;

    @ApiProperty({example: '1', description: "Event turi id si"})
    @IsNotEmpty()
    @IsInt()
    event_type_id: number;

    @ApiProperty({example: '1', description: "tomoshabin kategoriyasi id si"})
    @IsNotEmpty()
    @IsInt()
    human_category_id: number;

    @ApiProperty({example: '1', description: "Obect(Venue) id si"})
    @IsNotEmpty()
    @IsInt()
    venue_id: number;

    @ApiProperty({example: '2022-04-31', description: " "})
    @IsNotEmpty()
    @IsDate()
    release_date?: Date;
}
