import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class UpdateCountryDto  {
    @ApiProperty({example: 'Uzbekistan', description: "Davlat nomi"})
    @IsNotEmpty()
    @IsString()
    name?: string;
}
