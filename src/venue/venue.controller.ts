import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Venue lar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}
  @ApiOperation({summary: 'Venue yaratish'})
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({summary: 'Venue larni olish'})
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({summary: 'Bitta Venue ni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Venue ni o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({summary: 'Bitta Venue ni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
