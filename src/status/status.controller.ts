import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Status lar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({summary: 'Status yaratish'})
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({summary: 'Statuslarni olish'})
  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({summary: 'Bitta Statusni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Statusni o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({summary: 'Bitta Statusni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
