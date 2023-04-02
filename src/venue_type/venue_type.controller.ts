import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Venue turlari bo`limi')
@UseGuards(IsAdminGuard)
@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({summary: 'Venue turini yaratish'})
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({summary: 'Venue turlarini olish'})
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({summary: 'Venue turini olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({summary: 'Venue turini o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({summary: 'Venue turini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
