import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventLangService } from './event_lang.service';
import { CreateEventLangDto } from './dto/create-event_lang.dto';
import { UpdateEventLangDto } from './dto/update-event_lang.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';


@ApiTags('Event tillari bo`limi')
@UseGuards(IsAdminGuard)
@Controller('event-lang')
export class EventLangController {
  constructor(private readonly eventLangService: EventLangService) {}

  @ApiOperation({summary: 'Eventga til qo`shish'})
  @Post()
  create(@Body() createEventLangDto: CreateEventLangDto) {
    return this.eventLangService.create(createEventLangDto);
  }

  @ApiOperation({summary: 'Event tillari'})
  @Get()
  findAll() {
    return this.eventLangService.findAll();
  }

  @ApiOperation({summary: 'Bitta Event tili'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventLangService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Event tilini yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventLangDto: UpdateEventLangDto) {
    return this.eventLangService.update(+id, updateEventLangDto);
  }

  @ApiOperation({summary: 'Bitta Event tilini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventLangService.remove(+id);
  }
}
