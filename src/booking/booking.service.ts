import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { TicketService } from '../ticket/ticket.service';
import { CartService } from '../cart/cart.service';
import { AddMinutesToDate } from '../helper/addMinutes';

@Injectable()
export class BookingService {

  constructor(
    @InjectModel(Booking) private bookingRepo: typeof Booking,
    private readonly ticketService: TicketService,
    private readonly cartService: CartService,

    ){}

  async create(createBookingDto: CreateBookingDto) {
    const {cart_id} = createBookingDto
    const time = new Date()
    const finishedAt = AddMinutesToDate(time, 30);
    const cart = await this.cartService.findOne(cart_id);
    
    if(cart.status_id != 1){
      throw new BadRequestException('cart not found')
    }
    await this.cartService.update(cart_id, {status_id: 4, finishedAt});
    
   
    const newBooking = await this.bookingRepo.create({...createBookingDto, finishedAt})

    return newBooking;
  }

  async timeUp(id: number){
    const booking = await this.findOne(id);
    const cart_id = booking.cart_id;
    const cart = await this.cartService.findOne(cart_id);
    const ticket_id = cart.ticket_id;

    await this.remove(id);
    await this.cartService.remove(cart_id);
    const updatedTicket = await this.ticketService.update(ticket_id, {status_id: 3});

    return {
      message: "time out",
      updatedTicket
    };

  }

  async buyTicket(id: number){
    const booking = await this.findOne(id);
    if(!booking){
      throw new NotFoundException("booking not found");
    }
    const cart_id = booking.cart_id;

    const cart = await this.cartService.findOne(cart_id);
    const ticket_id = cart.ticket_id;

    const updatedTicket = await this.ticketService.update(ticket_id, {status_id: 5});
    const updatedCart = await this.cartService.update(cart_id, {status_id: 5});
    const updatedBooking = await this.update(id, {status_id: 5});

    return {
      message: "ticket buyed"
    }

  }

  findAll() {
    return this.bookingRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.bookingRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepo.update(updateBookingDto, {where: {id}});
  }

  remove(id: number) {
    return this.bookingRepo.destroy({where: {id}});
  }
}
