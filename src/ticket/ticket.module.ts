import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket } from './models/ticket.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from '../event/models/event.model';
import { Seat } from '../seat/models/seat.model';
import { Status } from '../status/models/status.model';
import { TicketType } from '../ticket_type/models/ticket_type.model';
import { Cart } from '../cart/models/cart.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Ticket, Event, Seat, Status, TicketType, Cart]), JwtModule],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule {}
