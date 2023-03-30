import { PartialType } from '@nestjs/mapped-types';
import { CreateEventLangDto } from './create-event_lang.dto';

export class UpdateEventLangDto extends PartialType(CreateEventLangDto) {}
