import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { VenueAndType } from "../../venue_and_type/models/venue_and_type.model";

interface VenueTypeAttr {
    name: string;
}

@Table({tableName: 'venue_type', createdAt: false, updatedAt: false})
export class VenueType extends Model<VenueType, VenueTypeAttr>{
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

    @HasMany(()=>VenueAndType)
    venue_and_types: VenueAndType[]; 
}
