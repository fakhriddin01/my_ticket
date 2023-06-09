import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatType } from '../seat_type/models/seat_type.model';
import { Seat } from './models/seat.model';
import { Ticket } from '../ticket/models/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([SeatType, Seat,Ticket]), JwtModule],
  controllers: [SeatController],
  providers: [SeatService]
})
export class SeatModule {}
