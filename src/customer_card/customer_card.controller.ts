import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';

@ApiTags('Customer-Car lar bo`limi')
@UseGuards(JwtGuard)
@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}


  @ApiOperation({summary: 'Customer-Card yaratish'})
  @Post() 
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({summary: 'Customer-Cardlarni olish'})
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({summary: 'BItta Customer-Cardni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Customer-Cardni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({summary: 'BItta Customer-Cardni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
