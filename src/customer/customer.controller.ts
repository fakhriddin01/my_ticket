import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LogoutUserDto } from './dto/logout-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('signup')
  registration(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.registration(createCustomerDto);
  }

  @Post('signin')
  singin(@Body() loginUserDto: LoginUserDto) {
    return this.customerService.sigin(loginUserDto);
  }

  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutUserDto) {
    return this.customerService.singout(+id, logoutUserDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
