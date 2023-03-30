import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from '../district/models/district.model';
import { Venue } from './models/venue.model';
import { VenueAndType } from '../venue_and_type/models/venue_and_type.model';
import { VenueType } from '../venue_type/models/venue_type.model';
import { VenuePhoto } from '../venue_photo/models/venue_photo.model';
import { Seat } from '../seat/models/seat.model';

@Module({
  imports:[SequelizeModule.forFeature([District, Venue, VenueAndType, VenueType, VenuePhoto, Seat])],
  controllers: [VenueController],
  providers: [VenueService]
})
export class VenueModule {}
