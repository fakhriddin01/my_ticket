import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Ticket turlari bo`limi')
@UseGuards(IsAdminGuard)
@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @ApiOperation({summary: 'ticket turi yaratish'})
  @Post()
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @ApiOperation({summary: 'ticket turlarini olish'})
  @Get()
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @ApiOperation({summary: 'bitta ticket turini olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @ApiOperation({summary: 'bitta ticket turini o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @ApiOperation({summary: 'bitta ticket turini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
