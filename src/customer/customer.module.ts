import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { JwtModule } from '@nestjs/jwt';
import { CustomerCard } from '../customer_card/models/customer_card.model';

@Module({
  imports:[SequelizeModule.forFeature([Customer, CustomerCard]),
    JwtModule.register({
      
    })
  ],

  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
