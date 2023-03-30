import { Injectable } from '@nestjs/common';
import { CreateVenueAndTypeDto } from './dto/create-venue_and_type.dto';
import { UpdateVenueAndTypeDto } from './dto/update-venue_and_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueAndType } from './models/venue_and_type.model';

@Injectable()
export class VenueAndTypeService {

  constructor(@InjectModel(VenueAndType) private venueAndTypeRepo: typeof VenueAndType){}

  async create(createVenueAndTypeDto: CreateVenueAndTypeDto) {
    return this.venueAndTypeRepo.create(createVenueAndTypeDto);
  }

  async findAll() {
    return this.venueAndTypeRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.venueAndTypeRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateVenueAndTypeDto: UpdateVenueAndTypeDto) {
    return this.venueAndTypeRepo.update(updateVenueAndTypeDto, {where: {id}});
  }

  remove(id: number) {
    return this.venueAndTypeRepo.destroy({where: {id}});
  }
}
