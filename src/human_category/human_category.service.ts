import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';

@Injectable()
export class HumanCategoryService {

  constructor(@InjectModel(HumanCategory) private humanCategoryRepo: typeof HumanCategory){}

  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepo.create(createHumanCategoryDto);
  }

  async findAll() {
    return this.humanCategoryRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.humanCategoryRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryRepo.update(updateHumanCategoryDto, {where: {id}});
  }

  remove(id: number) {
    return this.humanCategoryRepo.destroy({where: {id}});
  }
}
