import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';

@ApiTags('Cart lar bo`limi')
@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({summary: 'Cart yaratish'})
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({summary: 'Cartlarni olish'})
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({summary: 'bitta Cartni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  } 

  @ApiOperation({summary: 'bitta Cartni vaqti otganda yangilash'})
  @Patch(':id/timeout')
  timeUp(@Param('id') id: string) {
    return this.cartService.timeUp(+id);
  }


  @ApiOperation({summary: 'bitta Cartni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({summary: 'bitta Cartni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
