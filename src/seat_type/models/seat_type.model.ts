import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface SeatTypeAttr {
    name: string;
}

@Table({tableName: 'seat_type', createdAt: false, updatedAt: false})
export class SeatType extends Model<SeatType, SeatTypeAttr>{
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

    // @HasMany(()=>Seat)
    // seats: Seat[];
}
