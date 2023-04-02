import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Country } from "../../country/models/country.model";

interface RegionAttr {
    name: string;
    country_id: number;
}

@Table({tableName: 'region', createdAt: false, updatedAt: false})
export class Region extends Model<Region, RegionAttr>{
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

    @ForeignKey(()=> Country)
    @Column({
        type:DataType.INTEGER,
    })
    country_id: number;

    @BelongsTo(()=> Country)
    country: Country;

    @HasMany(()=>District)
    districts: District[];
}
