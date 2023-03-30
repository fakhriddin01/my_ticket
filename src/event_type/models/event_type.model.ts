import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";

interface EventTypeAttr {
    name: string;
    parent_id?: number;
}

@Table({tableName: 'event_type', createdAt: false, updatedAt: false})
export class EventType extends Model<EventType, EventTypeAttr>{
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

    @ForeignKey(()=> EventType)
    @Column({
        type:DataType.INTEGER,
    })
    parent_id: number;

    @HasMany(()=> EventType)
    subCategories: EventType[];

    
}
