import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { TicketService } from '../ticket/ticket.service';
import { AddMinutesToDate } from '../helper/addMinutes';

@Injectable()
export class CartService {

  constructor(
    @InjectModel(Cart) private cartRepo: typeof Cart,
    private readonly ticketService: TicketService
  ){}

  async create(createCartDto: CreateCartDto) {
    const {ticket_id} = createCartDto
    const updateTicketStatus = this.ticketService.update(ticket_id, {status_id: 1})

    const time = new Date()
    const finishedAt = AddMinutesToDate(time, 30);
    const newCart = await this.cartRepo.create({...createCartDto, finishedAt});
    return newCart;
  }

  async timeUp(id: number){
    const cart = await this.findOne(id);
    const ticket_id = cart.ticket_id;

    await this.remove(id);
    const updatedTicket = await this.ticketService.update(ticket_id, {status_id: 3});

    return {
      message: "time out",
      updatedTicket
    };

  }

  findAll() {
    return this.cartRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.cartRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepo.update(updateCartDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.cartRepo.destroy({where: {id}});
  }
}
