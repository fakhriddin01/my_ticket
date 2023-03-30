import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './models/venue.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue){}

  create(createVenueDto: CreateVenueDto) {
    return this.venueRepo.create(createVenueDto);;
  }

  async findAll() {
    return this.venueRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.venueRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueRepo.update(updateVenueDto, {where: {id}});
  }

  remove(id: number) {
    return this.venueRepo.destroy({where: {id}});
  }
}
