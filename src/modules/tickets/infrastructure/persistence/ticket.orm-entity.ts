// src/modules/tickets/infrastructure/persistence/ticket.orm-entity.ts

import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tickets')
export class TicketOrmEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Index()
  @Column({ type: 'varchar', length: 20 })
  status!: string;

  @Column({ type: 'varchar', length: 20 })
  priority!: string;

  @Index()
  @Column({ name: 'customer_id', type: 'varchar' })
  customerId!: string;

  @Index()
  @Column({ name: 'assigned_agent_id', type: 'varchar', nullable: true })
  assignedAgentId!: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
