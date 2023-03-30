import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './models/ticket_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TicketTypeService {

  constructor(@InjectModel(TicketType) private ticketTypeRepo: typeof TicketType){}

  create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeRepo.create(createTicketTypeDto);
  }

  async findAll() {
    return this.ticketTypeRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.ticketTypeRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeRepo.update(updateTicketTypeDto, {where: {id}});
  }

  remove(id: number) {
    return this.ticketTypeRepo.destroy({where: {id}});
  }
}
