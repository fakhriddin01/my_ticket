import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto){}

  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoRepo.create(createVenuePhotoDto);
  }

  async findAll() {
    return this.venuePhotoRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.venuePhotoRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoRepo.update(updateVenuePhotoDto, {where: {id}});
  }

  remove(id: number) {
    return this.venuePhotoRepo.destroy({where: {id}});
  }
}
