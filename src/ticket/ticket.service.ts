import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {

  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket){}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepo.create(createTicketDto);

  }
  async findAll() {
    return this.ticketRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.ticketRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepo.update(updateTicketDto, {where: {id}});

  }

  remove(id: number) {
    return this.ticketRepo.destroy({where: {id}});

  }
}
