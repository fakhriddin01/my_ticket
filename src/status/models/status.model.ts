import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";

interface StatusAttr {
    name: string;
}

@Table({tableName: 'status', createdAt: false, updatedAt: false})
export class Status extends Model<Status, StatusAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    name: string;

    
}
