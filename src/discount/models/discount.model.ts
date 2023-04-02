import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";

interface DiscountAttr {
    name: string;
    discount: number;
}
@Table({tableName: 'discount'})
export class Discount extends Model<Discount, DiscountAttr> {
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
        type:DataType.DECIMAL,
        allowNull: false
    })
    discount: number;
}
