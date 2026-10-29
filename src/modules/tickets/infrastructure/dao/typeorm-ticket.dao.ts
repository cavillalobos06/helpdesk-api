//src/modules/tickets/infrastructure/dao/typeorm-ticket.dao.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../../domain/entities/ticket.entity.js';
import { TicketDao } from '../../domain/dao/ticket.dao.js';
import { TicketOrmEntity } from '../persistence/ticket.orm-entity.js';
import { TicketMapper } from '../mappers/ticket.mapper.js';

@Injectable()
export class TypeOrmTicketDao implements TicketDao {
  constructor(
    @InjectRepository(TicketOrmEntity)
    private readonly repo: Repository<TicketOrmEntity>,
  ) {}

  async save(ticket: Ticket): Promise<Ticket> {
    const saved = await this.repo.save(TicketMapper.toOrm(ticket));

    return TicketMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Ticket | null> {
    const orm = await this.repo.findOneBy({ id });

    return orm ? TicketMapper.toDomain(orm) : null;
  }
}
