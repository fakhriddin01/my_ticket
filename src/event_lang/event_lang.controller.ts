import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventLangService } from './event_lang.service';
import { CreateEventLangDto } from './dto/create-event_lang.dto';
import { UpdateEventLangDto } from './dto/update-event_lang.dto';

@Controller('event-lang')
export class EventLangController {
  constructor(private readonly eventLangService: EventLangService) {}

  @Post()
  create(@Body() createEventLangDto: CreateEventLangDto) {
    return this.eventLangService.create(createEventLangDto);
  }

  @Get()
  findAll() {
    return this.eventLangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventLangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventLangDto: UpdateEventLangDto) {
    return this.eventLangService.update(+id, updateEventLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventLangService.remove(+id);
  }
}
