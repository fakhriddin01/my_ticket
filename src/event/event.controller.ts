import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Eventlar bo`limi')
@UseGuards(JwtGuard)
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({summary: 'Event yaratish'})
  @UseGuards(IsAdminGuard)
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({summary: 'Eventlar'})
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({summary: 'Bitta Event'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Eventni yangilash'})
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({summary: 'Bitta Eventni o`chirish'})
  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
