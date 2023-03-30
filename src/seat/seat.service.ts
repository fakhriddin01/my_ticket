import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Injectable()
export class SeatService {

  constructor(@InjectModel(Seat) private seatRepo: typeof Seat){}

  create(createSeatDto: CreateSeatDto) {
    return this.seatRepo.create(createSeatDto);
  }

  async findAll() {
    return this.seatRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.seatRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatRepo.update(updateSeatDto, {where: {id}});
  }

  remove(id: number) {
    return this.seatRepo.destroy({where: {id}});
  }
}
