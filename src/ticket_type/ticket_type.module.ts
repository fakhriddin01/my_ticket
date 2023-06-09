import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';
import { TicketType } from './models/ticket_type.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from '../ticket/models/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([TicketType, Ticket]), JwtModule],
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
