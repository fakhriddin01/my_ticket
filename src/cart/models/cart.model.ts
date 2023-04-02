import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Customer } from "../../customer/models/customer.model";
import { Status } from "../../status/models/status.model";
import { Booking } from "../../booking/models/booking.model";

interface CartAttr {
    ticket_id: number;
    customer_id: number;
    status_id: number;
    finishedAt: Date
}
@Table({tableName: 'cart', updatedAt: false})
export class Cart extends Model<Cart, CartAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Ticket)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    ticket_id: number;

    @ForeignKey(()=> Customer)
    @Column({
        type:DataType.INTEGER,
        allowNull:false

    })
    customer_id: number;

    @ForeignKey(()=> Status)
    @Column({
        type:DataType.INTEGER,
        defaultValue: 1

    })
    status_id: number;

    @Column({
        type:DataType.DATE,
    })
    finishedAt: Date;

    @BelongsTo(()=> Ticket)
    ticket: Ticket;

    @BelongsTo(()=> Customer)
    customer: Customer;

    @BelongsTo(()=> Status)
    status: Status;

    @HasMany(()=> Booking)
    bookings: Booking[]
}
