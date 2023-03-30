import { Injectable } from '@nestjs/common';
import { CreateEventLangDto } from './dto/create-event_lang.dto';
import { UpdateEventLangDto } from './dto/update-event_lang.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventLang } from './models/event_lang.model';

@Injectable()
export class EventLangService {

  constructor(@InjectModel(EventLang) private eventLangRepo: typeof EventLang){}

  create(createEventLangDto: CreateEventLangDto) {
    return this.eventLangRepo.create(createEventLangDto);
  }

  async findAll() {
    return this.eventLangRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.eventLangRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateEventLangDto: UpdateEventLangDto) {
    return this.eventLangRepo.update(updateEventLangDto, {where: {id}});
  }

  remove(id: number) {
    return this.eventLangRepo.destroy({where: {id}});
  }
}
