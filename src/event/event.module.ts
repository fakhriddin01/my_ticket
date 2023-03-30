import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { EventLang } from '../event_lang/models/event_lang.model';
import { Venue } from '../venue/models/venue.model';
import { HumanCategory } from '../human_category/models/human_category.model';
import { Language } from '../language/models/language.model';
import { Ticket } from '../ticket/models/ticket.model';

@Module({
  imports:[SequelizeModule.forFeature([Event, EventLang, Venue, HumanCategory, Language, Ticket])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
