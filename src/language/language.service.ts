import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {

  constructor(@InjectModel(Language) private languageRepo: typeof Language){}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageRepo.create(createLanguageDto);
  }

  async findAll() {
    return this.languageRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.languageRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.languageRepo.update(updateLanguageDto, {where: {id}});
  }

  remove(id: number) {
    return this.languageRepo.destroy({where: {id}});
  }
}
