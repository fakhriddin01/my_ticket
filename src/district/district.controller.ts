import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('District lar bo`limi')
@UseGuards(JwtGuard)
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({summary: 'District yaratish'})
  @UseGuards(IsAdminGuard)
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({summary: 'Districtlar'})
  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({summary: 'Bitta District'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Districtni yangilash'})
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({summary: 'Bitta Districtni o`chirish'})
  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
