import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { Status } from "../../status/models/status.model";
import { TicketType } from "../../ticket_type/models/ticket_type.model";

interface TicketAttr {
    price: number;
    service_fee: number;
}

@Table({tableName: 'ticket'})
export class Ticket extends Model<Ticket, TicketAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Event)
    @Column({
        type:DataType.INTEGER,
    })
    event_id: number;

    @ForeignKey(()=> Seat)
    @Column({
        type:DataType.INTEGER,
    })
    seat_id: number;

    @Column({
        type:DataType.DECIMAL,
    })
    price: number;

    @Column({
        type:DataType.DECIMAL,
    })
    service_fee: number;

    @ForeignKey(()=> Status)
    @Column({
        type:DataType.INTEGER,
    })
    status_id: number;

    @ForeignKey(()=> TicketType)
    @Column({
        type:DataType.INTEGER,
    })
    ticket_type_id: number;

    @BelongsTo(()=> Event)
    event: Event;

    @BelongsTo(()=> Seat)
    seat: Seat;

    @BelongsTo(()=> Status)
    status: Status;

    @BelongsTo(()=> TicketType)
    ticket_type: TicketType;

}
