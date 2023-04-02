import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";

interface CountryAttr {
    name: string;
}

@Table({tableName: 'country', createdAt: false, updatedAt: false})
export class Country extends Model<Country, CountryAttr> {
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

    @HasMany(()=>Region)
    regions: Region[];
}
