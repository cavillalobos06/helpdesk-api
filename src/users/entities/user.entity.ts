import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsInt, IsEmpty, MinLength, IsEmail } from 'class-validator';

@Entity('Usuario')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsString()
  @IsEmpty()
  name: string;

  @Column({ type: 'varchar', unique: true })
  @IsString()
  @IsEmail()
  email: string;

  @Column({ type: 'varchar' })
  @IsString()
  @IsEmpty()
  @MinLength(6)
  password: string;

  @Column({type: 'varchar'})
  @IsString()
  country: string

  @Column({type: 'varchar'})
  @IsString()
  city: string;

  @Column({type: 'varchar'})
  @IsString()
  phone: string;

  @Column({type: 'varchar'})
  @IsString()
  birthdate: string;

  @Column({type: 'varchar'})
  gender?: string;
}
