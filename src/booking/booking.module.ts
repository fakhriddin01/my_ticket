import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { Discount } from '../discount/models/discount.model';
import { PaymentMethod } from '../payment_method/models/payment_method.model';
import { Status } from '../status/models/status.model';
import { TicketModule } from '../ticket/ticket.module';
import { CartModule } from '../cart/cart.module';
import { Cart } from '../cart/models/cart.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Booking, Discount, PaymentMethod, Status, Cart]),
  TicketModule, CartModule, JwtModule
],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
