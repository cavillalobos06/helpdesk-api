import {
  Ticket,
  TicketPriority,
  TicketStatus,
} from '../../domain/entities/ticket.entity.js';
import { TicketOrmEntity } from '../persistence/ticket.orm-entity.js';

export class TicketMapper {
  static toDomain(orm: TicketOrmEntity): Ticket {
    return Ticket.restore({
      id: orm.id,
      title: orm.title,
      description: orm.description,
      status: orm.status as TicketStatus,
      priority: orm.priority as TicketPriority,
      customerId: orm.customerId,
      assignedAgentId: orm.assignedAgentId,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
    });
  }

  static toOrm(ticket: Ticket): TicketOrmEntity {
    const orm = new TicketOrmEntity();
    const p = ticket.toProps();
    orm.id = p.id;
    orm.title = p.title;
    orm.description = p.description;
    orm.status = p.status;
    orm.priority = p.priority;
    orm.customerId = p.customerId;
    orm.assignedAgentId = p.assignedAgentId;
    orm.createdAt = p.createdAt;
    orm.updatedAt = p.updatedAt;
    return orm;
  }
}
