import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";

interface DistrictAttr {
    name: string;
}

@Table({tableName: 'district', createdAt: false, updatedAt: false})
export class District extends Model<District, DistrictAttr> {
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

    @ForeignKey(()=> Region)
    @Column({
        type:DataType.INTEGER,
    })
    region_id: number;

    @BelongsTo(()=> Region)
    region: Region;

    @HasMany(()=>Venue)
    venues: Venue[];

    
}
