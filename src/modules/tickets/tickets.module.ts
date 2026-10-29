// src/modules/tickets/tickets.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketDao } from './domain/dao/ticket.dao.js';
import { TicketOrmEntity } from './infrastructure/persistence/ticket.orm-entity.js';
import { TypeOrmTicketDao } from './infrastructure/dao/typeorm-ticket.dao.js';

@Module({
  imports: [TypeOrmModule.forFeature([TicketOrmEntity])],
  providers: [{ provide: TicketDao, useClass: TypeOrmTicketDao }],
  exports: [TicketDao],
})
export class TicketsModule {}
