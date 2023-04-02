import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import { JwtGuard } from '../guards/jwt-auth.guard';


@ApiTags('Bookinglar lar bo`limi')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}


  @ApiOperation({summary: 'Booking yaratish'})
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({summary: 'Barcha bookinglarni olish'})
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({summary: 'Bitta bookingni olish'})
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({summary: 'Bookingni vaqti tugagani uchun o`zgartirish'})
  @UseGuards(JwtGuard)
  @Patch(':id/timeout')
  timeup(@Param('id') id: string) {
    return this.bookingService.timeUp(+id);
  } 

  @ApiOperation({summary: 'Bookingni o`zgartirish'})
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({summary: 'Bookingni o`chirish'})
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
