import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeRepo: typeof VenueType){}

  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepo.create(createVenueTypeDto);
  }

  async findAll() {
    return this.venueTypeRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.venueTypeRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeRepo.update(updateVenueTypeDto, {where: {id}});
  }

  remove(id: number) {
    return this.venueTypeRepo.destroy({where: {id}});
  }
}
