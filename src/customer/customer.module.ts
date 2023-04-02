import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { JwtModule } from '@nestjs/jwt';
import { CustomerCard } from '../customer_card/models/customer_card.model';
import { Cart } from '../cart/models/cart.model';
import { CustomerAddress } from '../customer_address/models/customer_address.model';

@Module({
  imports:[SequelizeModule.forFeature([Customer, CustomerCard, Cart, CustomerAddress]),
    JwtModule.register({
      
    })
  ],

  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
