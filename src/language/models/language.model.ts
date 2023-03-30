import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { EventLang } from "../../event_lang/models/event_lang.model";


interface LanguageAttr {
    name: string;
}
@Table({tableName: 'language', createdAt: false, updatedAt: false})
export class Language extends Model<Language, LanguageAttr>{
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

    @HasMany(()=>EventLang)
    event_lang: EventLang[]; 
}
