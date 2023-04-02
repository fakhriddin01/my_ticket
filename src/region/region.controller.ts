import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Region lar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({summary: 'Region yaratish'})
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({summary: 'Regionlarni olish'})
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({summary: 'Regionni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({summary: 'Regionni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({summary: 'Regionni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
