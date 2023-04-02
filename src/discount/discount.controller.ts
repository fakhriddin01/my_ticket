import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Discount lar bo`limi')
@UseGuards(JwtGuard)
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @ApiOperation({summary: 'Discount yaratish'})
  @UseGuards(IsAdminGuard)
  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountService.create(createDiscountDto);
  }

  @ApiOperation({summary: 'Discountlarni ko`rish'})
  @Get()
  findAll() {
    return this.discountService.findAll();
  }

  @ApiOperation({summary: 'BItta Discountni ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Discountni ko`rish'})
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: UpdateDiscountDto) {
    return this.discountService.update(+id, updateDiscountDto);
  }

  @ApiOperation({summary: 'BItta Discountni o`chirish'})
  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountService.remove(+id);
  }
}
