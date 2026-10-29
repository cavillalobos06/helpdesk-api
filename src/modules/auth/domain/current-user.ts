// src/modules/auth/domain/current-user.ts

import { Role } from './role.js';

export interface CurrentUser {
  id: string;
  role: Role;
}
