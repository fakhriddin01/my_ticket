import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('O`rindiq turi bo`limi')
@UseGuards(IsAdminGuard)
@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({summary: 'O`rindiq turini yaratish'})
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({summary: 'O`rindiq turlari'})
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({summary: 'Bitta O`rindiq turi'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypeService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta O`rindiq turini o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeService.update(+id, updateSeatTypeDto);
  }

  @ApiOperation({summary: 'Bitta O`rindiq turini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypeService.remove(+id);
  }
}
