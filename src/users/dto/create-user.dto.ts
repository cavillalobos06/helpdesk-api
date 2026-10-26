export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  phone: string;
  birthdate: string;
  gender?: string;
}
