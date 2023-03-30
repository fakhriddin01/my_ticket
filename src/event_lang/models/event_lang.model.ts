import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Language } from "../../language/models/language.model";
import { Event } from "../../event/models/event.model";

interface EventLangAttr {
    lang_id: number;
    event_id: number;
}

@Table({tableName: 'event_lang', createdAt: false, updatedAt: false})
export class EventLang extends Model<EventLang, EventLangAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Language)
    @Column({
        type:DataType.INTEGER,
    })
    lang_id: number;

    @ForeignKey(()=> Event)
    @Column({
        type:DataType.INTEGER,
    })
    event_id: number;

    @BelongsTo(()=> Language)
    language: Language;

    @BelongsTo(()=> Event)
    event: Event;
}
