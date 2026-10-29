import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity.js';
import { Category } from '../../category/entities/category.entity.js';
import { Priority, TicketStatus } from '../../common/enum.js';

@Entity('Ticket')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.OPEN })
  status: TicketStatus;

  @Column({ type: 'enum', enum: Priority })
  priority: Priority;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.createdTickets, { onDelete: 'CASCADE' })
  customer: User;

  @ManyToOne(() => User, (user) => user.assignedTickets, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  assignedAgent: User;

  @ManyToOne(() => Category, (category) => category.tickets, {
    onDelete: 'RESTRICT',
  })
  category: Category;
}
