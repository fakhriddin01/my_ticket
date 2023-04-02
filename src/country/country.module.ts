import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './models/country.model';
import { Region } from '../region/models/region.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Region, Country]), JwtModule],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
