import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';

@ApiTags('Addres lar bo`limi')
@UseGuards(JwtGuard)
@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAddressService: CustomerAddressService) {}

  @ApiOperation({summary: 'Addres yaratish'})
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({summary: 'Addresslarni olish'})
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({summary: 'Addressni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({summary: 'Addressni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation({summary: 'Addressni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }
}
