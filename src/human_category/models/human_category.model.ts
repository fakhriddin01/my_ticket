import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";

interface HumanCategoryAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender: string;
}

@Table({tableName: 'human_category', createdAt: false, updatedAt: false})
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
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

    @Column({
        type:DataType.INTEGER,
    })
    start_age: number;

    @Column({
        type:DataType.INTEGER,
    })
    finish_age: number;

    @Column({
        type:DataType.STRING,
    })
    gender: string;

    
    
}
