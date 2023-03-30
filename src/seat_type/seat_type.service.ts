import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType){}

  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepo.create(createSeatTypeDto);
  }

  async findAll() {
    return this.seatTypeRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.seatTypeRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeRepo.update(updateSeatTypeDto, {where: {id}});
  }

  remove(id: number) {
    return this.seatTypeRepo.destroy({where: {id}});
  }
}
