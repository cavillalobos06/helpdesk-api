import { IsString, IsNotEmpty, IsEmail, MinLength, IsEnum, IsOptional } from "class-validator";

export class CreateUserDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  birthdate: string;

  @IsString()
  @IsOptional()
  gender?: string
}
