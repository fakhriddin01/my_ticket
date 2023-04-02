import { Module } from '@nestjs/common';
import { EventLangService } from './event_lang.service';
import { EventLangController } from './event_lang.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from '../language/models/language.model';
import { EventLang } from './models/event_lang.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Language, EventLang]), JwtModule],
  controllers: [EventLangController],
  providers: [EventLangService]
})
export class EventLangModule {}
