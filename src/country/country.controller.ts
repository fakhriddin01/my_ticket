import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { IsAdminGuard } from '../guards/isAdmin.guard';


@ApiTags('Country lar bo`limi')
@UseGuards(JwtGuard)
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({summary: 'Country yaratish'})
  @UseGuards(IsAdminGuard)
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({summary: 'Countrylarni olish'})
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({summary: 'Bitta countryni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta countryni yangilash'})
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  } 


  @ApiOperation({summary: 'Bitta countryni o`chirish'})
  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
