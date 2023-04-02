import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Event turlarini belgilash bo`limi')
@UseGuards(IsAdminGuard)
@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({summary: 'Eventga tur qo`shish'})
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({summary: 'Barcha Eventg-tur lar'})
  @Get()  
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({summary: 'Bitta Eventg-tur'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Eventg-tur ni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({summary: 'Bitta Eventg-tur ni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
