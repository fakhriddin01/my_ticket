import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';


@ApiTags('To`lov usullari bo`limi')
@UseGuards(IsAdminGuard)
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({summary: 'To`lov usulini yaratish'})
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({summary: 'To`lov usullari'})
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({summary: 'Bitta To`lov usuli'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta To`lov usulini o`zgartirish'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({summary: 'Bitta To`lov usulini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
