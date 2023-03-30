import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat_type/models/seat_type.model";

interface SeatAttr {
    sector: number;
    row_number: number;
    number: number;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: string;
}

@Table({tableName: 'seat', createdAt: false, updatedAt: false})
export class Seat extends Model<Seat, SeatAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.INTEGER,
    })
    sector: number;

    @Column({
        type:DataType.INTEGER,
    })
    row_number: number;

    @Column({
        type:DataType.INTEGER,
    })
    number: number;

    @ForeignKey(()=>Venue)
    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    venue_id: number;

    @ForeignKey(()=>SeatType)
    @Column({
        type:DataType.INTEGER,
    })
    seat_type_id: number;

    @Column({
        type:DataType.STRING,
    })
    location_in_schema: string;

    @BelongsTo(()=> Venue)
    venue: Venue;

    @BelongsTo(()=> SeatType)
    seat_type: SeatType;

}
