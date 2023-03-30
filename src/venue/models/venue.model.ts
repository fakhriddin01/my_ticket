import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { VenueAndType } from "../../venue_and_type/models/venue_and_type.model";
import { District } from "../../district/models/district.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { Seat } from "../../seat/models/seat.model";

interface VenueAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
    
}

@Table({tableName: 'venue'})
export class Venue extends Model<Venue, VenueAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    address: string;

    @Column({
        type:DataType.STRING,
    })
    location: string;

    @Column({
        type:DataType.STRING,
    })
    site: string;

    @Column({
        type:DataType.STRING,
    })
    phone: string;

    @Column({
        type:DataType.STRING,
    })
    schema: string;

    @ForeignKey(()=> District)
    @Column({
        type:DataType.INTEGER,
    })
    district_id: number;

    @HasMany(()=>VenueAndType)
    venue_types: VenueAndType[];

    @HasMany(()=>VenuePhoto)
    venue_photo: VenuePhoto[];

    @HasMany(()=>Seat)
    seats: Seat[];

    @BelongsTo(()=> District)
    district: District;
}
