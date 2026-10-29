// src/modules/auth/presentation/to-current-user.ts

import { ForbiddenException } from '@nestjs/common';
import { UserSession } from '@thallesp/nestjs-better-auth';
import { CurrentUser } from '../domain/current-user.js';
import { isRole } from '../domain/role.js';

export function toCurrentUser(session: UserSession): CurrentUser {
  const { id, role } = session.user as { id: string; role?: unknown };
  if (!isRole(role)) {
    throw new ForbiddenException('Rol no reconocido');
  }
  return { id, role };
}
