import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { SeatTypeController } from './seat_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';
import { Seat } from '../seat/models/seat.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([SeatType, Seat]), JwtModule],
  controllers: [SeatTypeController],
  providers: [SeatTypeService]
})
export class SeatTypeModule {}
