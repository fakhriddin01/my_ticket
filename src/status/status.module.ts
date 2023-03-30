import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './models/status.model';
import { Ticket } from '../ticket/models/ticket.model';

@Module({
  imports:[SequelizeModule.forFeature([Status, Ticket])],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
