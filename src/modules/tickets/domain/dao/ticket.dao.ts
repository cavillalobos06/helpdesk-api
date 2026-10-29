// src/modules/tickets/domain/dao/ticket.dao.ts

import { Ticket } from '../entities/ticket.entity.js';

export abstract class TicketDao {
  abstract save(ticket: Ticket): Promise<Ticket>;
  abstract findById(id: string): Promise<Ticket | null>;
}
