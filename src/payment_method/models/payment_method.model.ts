import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

interface PaymentMethodAttr {
    name: string;
}

@Table({tableName: 'payment_method', createdAt: false, updatedAt: false})
export class PaymentMethod extends Model<PaymentMethod, PaymentMethodAttr>{
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
}
