import { exitCode } from "process";
import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenuePhotoAttr {
    venue_id: number;
    url: string;
}
@Table({tableName: 'venue_photo', createdAt: false, updatedAt: false})
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Venue)
    @Column({
        type:DataType.INTEGER,
    })
    venue_id: number;

    @Column({
        type:DataType.TEXT,
    })
    url: string;

    @BelongsTo(()=> Venue)
    venue: Venue;
}
