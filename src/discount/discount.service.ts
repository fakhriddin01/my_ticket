import { Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Discount } from './models/discount.model';

@Injectable()
export class DiscountService {

  constructor(@InjectModel(Discount) private discountRepo: typeof Discount){}

  create(createDiscountDto: CreateDiscountDto) {
    return this.discountRepo.create(createDiscountDto);
  }

  async findAll() {
    return this.discountRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.discountRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return this.discountRepo.update(updateDiscountDto, {where: {id}});
  }

  remove(id: number) {
    return this.discountRepo.destroy({where: {id}});
  }
}
