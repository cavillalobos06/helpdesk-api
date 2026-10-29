import { randomUUID } from 'node:crypto';
import { DomainError } from '../../../../shared/domain/domain.error.js';

export const TicketStatus = {
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
} as const;

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];

export const TicketPriority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

export type TicketPriority =
  (typeof TicketPriority)[keyof typeof TicketPriority];

const ALLOWED_TRANSITIONS: Record<TicketStatus, TicketStatus[]> = {
  open: ['in_progress', 'closed'],
  in_progress: ['resolved', 'open'],
  resolved: ['closed', 'in_progress'],
  closed: [],
};

export interface TicketProps {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  customerId: number;
  assignedAgentId: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Ticket {
  constructor(private readonly props: TicketProps) {}

  static create(input: {
    title: string;
    description: string;
    priority?: TicketPriority;
    customerId: number;
  }): Ticket {
    const title = input.title.trim();
    if (title.length < 5) {
      throw new DomainError('The title must be at least 5 characters long.');
    }

    const now = new Date();

    return new Ticket({
      id: randomUUID(),
      title,
      description: input.description.trim(),
      status: TicketStatus.OPEN,
      priority: input.priority ?? TicketPriority.MEDIUM,
      customerId: input.customerId,
      assignedAgentId: null,
      createdAt: now,
      updatedAt: now,
    });
  }

  static restore(props: TicketProps): Ticket {
    return new Ticket(props);
  }

  assignTo(agentId: number): void {
    if (this.props.status === 'closed') {
      throw new DomainError('A closed ticket cannot be assigned.');
    }

    this.props.assignedAgentId = agentId;
    this.touch();
  }

  changeStatus(next: TicketStatus): void {
    if (!ALLOWED_TRANSITIONS[this.props.status].includes(next)) {
      throw new DomainError(
        `Invalid Transaction: ${this.props.status} -> ${next}`,
      );
    }

    this.props.status = next;
    this.touch();
  }

  private touch(): void {
    this.props.updatedAt = new Date();
  }

  get id() {
    return this.props.id;
  }
  get title() {
    return this.props.title;
  }
  get description() {
    return this.props.description;
  }
  get status() {
    return this.props.status;
  }
  get priority() {
    return this.props.priority;
  }
  get customerId() {
    return this.props.customerId;
  }
  get assignedAgentId() {
    return this.props.assignedAgentId;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  toProps(): TicketProps {
    return { ...this.props };
  }
}
