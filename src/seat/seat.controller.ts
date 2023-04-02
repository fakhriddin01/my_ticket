import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('O`rindiglar lar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({summary: 'O`rindiq yaratish'})
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  } 

  @ApiOperation({summary: 'O`rindiqlar'})
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({summary: 'BItta O`rindiq'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta O`rindiqni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({summary: 'BItta O`rindiqni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
