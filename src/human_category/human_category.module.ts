import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';
import { Event } from '../event/models/event.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([HumanCategory, Event]), JwtModule],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService]
})
export class HumanCategoryModule {}
