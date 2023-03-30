import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Venue } from "../../venue/models/venue.model";
import { EventLang } from "../../event_lang/models/event_lang.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface EventAttr {
    name: string;
    start_date: Date;
    start_time: String;
    finish_date: Date;
    finish_time: String;
    info?: String;
    event_type_id: number;
    human_category_id: number;
    venue_id: number;
    release_date?: Date;
}

@Table({tableName: 'event'})
export class Event extends Model<Event, EventAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    photo: string;

    @Column({
        type:DataType.DATE,
    })
    start_date: Date;

    @Column({
        type:DataType.STRING,
    })
    start_time: string;

    @Column({
        type:DataType.DATE,
    })
    finish_date: Date;

    @Column({
        type:DataType.STRING,
    })
    finish_time: string;

    @Column({
        type:DataType.TEXT,
    })
    info: string;

    @ForeignKey(()=> EventType)
    @Column({
        type:DataType.INTEGER,
    })
    event_type_id: number;

    @ForeignKey(()=> HumanCategory)
    @Column({
        type:DataType.INTEGER,
    })
    human_category_id: number;

    @ForeignKey(()=> Venue)
    @Column({
        type:DataType.INTEGER,
    })
    venue_id: number;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now()
    })
    release_date: Date;

    @BelongsTo(()=> Venue)
    venue: Venue;

    @BelongsTo(()=> HumanCategory)
    human_category: HumanCategory;

    @HasMany(()=>EventLang)
    languages: EventLang[];

    @HasMany(()=>Ticket)
    tickets: Ticket[];
}
