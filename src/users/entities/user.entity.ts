import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../../ticket/entities/ticket.entity.js';
import { UserRole } from '../../common/enum.js';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role: UserRole;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  birthdate: string;

  @Column({ type: 'enum', enum: ["MALE", "FEMALE"] })
  gender?: string;

  @OneToMany(() => Ticket, (ticket) => ticket.customer)
  createdTickets: Ticket[];

  @OneToMany(() => Ticket, (ticket) => ticket.assignedAgent)
  assignedTickets: Ticket[];
}
