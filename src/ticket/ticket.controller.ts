import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Ticket lar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({summary: 'ticket yaratish'})
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({summary: 'ticketlarni olish'})
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({summary: 'Bitta ticketni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta ticketni o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({summary: 'Bitta ticketni o`cirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
