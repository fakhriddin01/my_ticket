import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Muhlislar kategoriyasi bo`limi')
@UseGuards(IsAdminGuard)
@Controller('human-category')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({summary: 'Muhlislar categoriyasini yaratish'})
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({summary: 'Barcha Muhlislar categoriyasini olish'})
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({summary: 'Bitta Muhlislar categoriyasini olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Muhlislar categoriyasini yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @ApiOperation({summary: 'Bitta Muhlislar categoriyasini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
