import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Status } from '../status/models/status.model';
import { Customer } from '../customer/models/customer.model';
import { Ticket } from '../ticket/models/ticket.model';
import { TicketModule } from '../ticket/ticket.module';
import { Booking } from '../booking/models/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Cart, Status, Customer, Ticket, Booking]),
  TicketModule, JwtModule
],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService]
})
export class CartModule {}
