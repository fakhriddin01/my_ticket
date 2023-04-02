import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueAndTypeService } from './venue_and_type.service';
import { CreateVenueAndTypeDto } from './dto/create-venue_and_type.dto';
import { UpdateVenueAndTypeDto } from './dto/update-venue_and_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Venuga biriktirilgan turlar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('venue-and-type')
export class VenueAndTypeController {
  constructor(private readonly venueAndTypeService: VenueAndTypeService) {}

  @ApiOperation({summary: 'Venuga biriktirilgan turlar yaratish'})
  @Post()
  create(@Body() createVenueAndTypeDto: CreateVenueAndTypeDto) {
    return this.venueAndTypeService.create(createVenueAndTypeDto);
  }

  @ApiOperation({summary: 'Venuga biriktirilgan turlar ni olish'})
  @Get()
  findAll() {
    return this.venueAndTypeService.findAll();
  }

  @ApiOperation({summary: 'Venuga biriktirilgan bitta turni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueAndTypeService.findOne(+id);
  }

  @ApiOperation({summary: 'Venuga biriktirilgan bitta turni o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueAndTypeDto: UpdateVenueAndTypeDto) {
    return this.venueAndTypeService.update(+id, updateVenueAndTypeDto);
  }

  @ApiOperation({summary: 'Venuga biriktirilgan bitta turni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueAndTypeService.remove(+id);
  }
}
