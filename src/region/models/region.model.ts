import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { District } from "../../district/models/district.model";

interface RegionAttr {
    name: string;
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

    @HasMany(()=>District)
    districts: District[];
}
