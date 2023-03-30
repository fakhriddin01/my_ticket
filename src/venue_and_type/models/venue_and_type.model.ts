import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueType } from "../../venue_type/models/venue_type.model";

interface VenueAndTypeAttr {
    venue_id: number;
    venue_type_id: number;
}

@Table({tableName: 'venue_and_types', createdAt: false, updatedAt: false})
export class VenueAndType extends Model<VenueAndType, VenueAndTypeAttr> {
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

    @ForeignKey(()=> VenueType)
    @Column({
        type:DataType.INTEGER,
    })
    venue_type_id: number;

    @BelongsTo(()=> Venue)
    venue: Venue;

    @BelongsTo(()=> VenueType)
    venue_types: VenueType;
}
