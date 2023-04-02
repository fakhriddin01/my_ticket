import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../guards/isAdmin.guard';


@ApiTags('Tillar bo`limi')
@UseGuards(IsAdminGuard)
@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({summary: 'Til yaratish'})
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @ApiOperation({summary: 'Barcha tillarni olish'})
  @Get()
  findAll() {
    return this.languageService.findAll();
  } 

  @ApiOperation({summary: 'BItta til olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta tilni yangilash'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(+id, updateLanguageDto);
  }

  @ApiOperation({summary: 'BItta tilni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
