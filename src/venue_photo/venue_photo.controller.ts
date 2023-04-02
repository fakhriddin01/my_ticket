import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Venue rasmlari bo`limi')
@UseGuards(IsAdminGuard)
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({summary: 'Venue rasmlarini yaratish'})
  @Post()
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({summary: 'Venue rasmlarini olish'})
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({summary: 'Bitta Venue rasmlarini olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Venue rasmlarini o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({summary: 'Bitta Venue rasmlarini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
