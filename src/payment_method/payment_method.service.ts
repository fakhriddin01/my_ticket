import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {

  constructor(@InjectModel(PaymentMethod) private paymentRepo: typeof PaymentMethod){}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentRepo.create(createPaymentMethodDto);

  }

  async findAll() {
    return this.paymentRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.paymentRepo.findOne({where: {id}, include:{all:true}});
  }
        
  update(id: number, updateRegionDto: UpdatePaymentMethodDto) {
    return this.paymentRepo.update(updateRegionDto, {where: {id}});
  }

  remove(id: number) {
    return this.paymentRepo.destroy({where: {id}});
  }
}
