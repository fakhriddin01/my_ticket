import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepo: typeof Event){}

  create(createEventDto: CreateEventDto) {
    return this.eventRepo.create(createEventDto);
  }

  async findAll() {
    return this.eventRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.eventRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepo.update(updateEventDto, {where: {id}});
  }

  remove(id: number) {
    return this.eventRepo.destroy({where: {id}});
  }
}
