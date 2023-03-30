export class CreateCustomerDto {
    first_name: string;
    last_name: string;
    phone?: string;
    password: string;
    confirm_password: string;
    email: string;
    birthday: Date;
    gender: string;
    lang_id: number;
}
