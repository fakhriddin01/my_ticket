import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './models/country.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CountryService {

  constructor(@InjectModel(Country) private countryRepo: typeof Country){}

  create(createCountryDto: CreateCountryDto) {
    return this.countryRepo.create(createCountryDto);
  }

  findAll() {
    return this.countryRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.countryRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
        return this.countryRepo.update(updateCountryDto, {where: {id}});
  }

  remove(id: number) {
    return this.countryRepo.destroy({where: {id}});
  }
}
