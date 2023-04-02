import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from '../customer/models/customer.model';
import { CustomerAddress } from './models/customer_address.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Customer, CustomerAddress]), JwtModule
],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
