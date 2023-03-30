import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Language } from "../../language/models/language.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model";


interface CustomerAttr {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birthday: Date;
    gender: string;
    hashed_refresh_token: string;
}

@Table({tableName: 'customer'})
export class Customer extends Model<Customer, CustomerAttr>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    first_name: string;

    @Column({
        type:DataType.STRING,
    })
    last_name: string;

    @Column({
        type:DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type:DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type:DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type:DataType.STRING,
    })
    phone: string;

    
    @Column({
        type:DataType.STRING,
    })
    gender: string;

    @Column({
        type:DataType.DATE,
    })
    birthday: Date;

    @ForeignKey(()=> Language)
    @Column({
        type:DataType.INTEGER,
    })
    lang_id: number;

    @HasMany(()=>CustomerCard)
    cards: CustomerCard[];

    
    // @HasOne(()=>UserWallet)
    // wallet: UserWallet
    
    // @HasMany(()=>Stadium)
    // stadiums: Stadium[];

    // @HasMany(()=>Comment)
    // comments: Stadium[];

    // @HasMany(()=>Order)
    // orders: Order[];

}

