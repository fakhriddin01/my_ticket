import { Module } from '@nestjs/common';
import { EventLangService } from './event_lang.service';
import { EventLangController } from './event_lang.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from '../language/models/language.model';
import { EventLang } from './models/event_lang.model';

@Module({
  imports:[SequelizeModule.forFeature([Language, EventLang])],
  controllers: [EventLangController],
  providers: [EventLangService]
})
export class EventLangModule {}
