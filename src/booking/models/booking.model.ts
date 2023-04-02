import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { Discount } from "../../discount/models/discount.model";
import { Status } from "../../status/models/status.model";

interface BookingAttr {
    cart_id: number;
    payment_method_id: number;
    finishedAt: Date;
    discount_id: number;
    isDelivery: boolean;
}

@Table({tableName: 'booking'})
export class Booking extends Model<Booking, BookingAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    
    @ForeignKey(()=> Cart)
    @Column({
        type:DataType.INTEGER,
    })
    cart_id: number;

    @ForeignKey(()=> PaymentMethod)
    @Column({
        type:DataType.INTEGER,
    })
    payment_method_id: number;

    @ForeignKey(()=> Discount)
    @Column({
        type:DataType.INTEGER,
    })
    discount_id: number;

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

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    isDelivery: boolean;

    @BelongsTo(()=> PaymentMethod)
    payment_method: PaymentMethod;

    @BelongsTo(()=> Status)
    status: Status;

    @BelongsTo(()=> Discount)
    discount: Discount;

    @BelongsTo(()=> Cart)
    cart: Cart;
}
