import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';

@Injectable()
export class CustomerCardService {

  constructor(
    @InjectModel(CustomerCard) private customerCardRepo: typeof CustomerCard
  ){}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardRepo.create(createCustomerCardDto);
  }

  async findAll() {
    return this.customerCardRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.customerCardRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return  this.customerCardRepo.update(updateCustomerCardDto, {where: {id}});
  }

  remove(id: number) {
    return this.customerCardRepo.destroy({where: {id}});
  }
}
