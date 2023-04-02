import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LogoutUserDto } from './dto/logout-customer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';


@ApiTags('Customer lar bo`limi')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}


  @ApiOperation({summary: 'Customer yaratish'})
  @Post('signup')
  registration(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.registration(createCustomerDto);
  }

  @ApiOperation({summary: 'Customer tizimga kirishi'})
  @Post('signin')
  singin(@Body() loginUserDto: LoginUserDto) {
    return this.customerService.sigin(loginUserDto);
  }

  @ApiOperation({summary: 'Customer tizimdan chiqishi'})
  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutUserDto) {
    return this.customerService.singout(+id, logoutUserDto);
  }

  @ApiOperation({summary: 'Barcha Customerlar'})
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({summary: 'BItta Customer'})
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Customerni yangilash'})
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({summary: 'BItta Customerni o`chirish'})
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
