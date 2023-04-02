import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize'
import { VenueModule } from './venue/venue.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenueAndTypeModule } from './venue_and_type/venue_and_type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { Venue } from './venue/models/venue.model';
import { VenueType } from './venue_type/models/venue_type.model';
import { VenueAndType } from './venue_and_type/models/venue_and_type.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenuePhoto } from './venue_photo/models/venue_photo.model';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { SeatType } from './seat_type/models/seat_type.model';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/models/seat.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventType } from './event_type/models/event_type.model';
import { EventModule } from './event/event.module';
import { LanguageModule } from './language/language.module';
import { Language } from './language/models/language.model';
import { EventLangModule } from './event_lang/event_lang.module';
import { EventLang } from './event_lang/models/event_lang.model';
import { Event } from './event/models/event.model';
import { HumanCategory } from './human_category/models/human_category.model';
import { StatusModule } from './status/status.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { Ticket } from './ticket/models/ticket.model';
import { Status } from './status/models/status.model';
import { TicketType } from './ticket_type/models/ticket_type.model';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/models/customer.model';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerCard } from './customer_card/models/customer_card.model';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';
import { BookingModule } from './booking/booking.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { DiscountModule } from './discount/discount.module';
import { Discount } from './discount/models/discount.model';
import { Booking } from './booking/models/booking.model';
import { Cart } from './cart/models/cart.model';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CountryModule } from './country/country.module';
import { Country } from './country/models/country.model';
import { CustomerAddress } from './customer_address/models/customer_address.model';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [Venue, VenueType, VenueAndType, Region, District, 
                VenuePhoto, SeatType, Seat, EventType, Language, Event, 
                HumanCategory, EventLang, Status, TicketType, Ticket, 
                Customer, CustomerCard, Admin, PaymentMethod, Discount, Booking, Cart, Country, CustomerAddress],
            autoLoadModels: true,
            logging: true
        }),
        VenueModule,
        VenueTypeModule,
        VenueAndTypeModule,
        RegionModule,
        DistrictModule,
        VenuePhotoModule,
        SeatTypeModule,
        SeatModule,
        HumanCategoryModule,
        EventTypeModule,
        EventModule,
        LanguageModule,
        EventLangModule,
        StatusModule,
        TicketModule,
        TicketTypeModule,
        CustomerModule,
        CustomerCardModule,
        CartModule,
        AdminModule,
        BookingModule,
        PaymentMethodModule,
        DiscountModule,
        CustomerAddressModule,
        CountryModule,
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {}
