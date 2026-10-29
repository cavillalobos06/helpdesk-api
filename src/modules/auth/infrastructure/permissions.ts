// src/modules/auth/infrastructure/permissions.ts

import { createAccessControl } from 'better-auth/plugins/access';
import { adminAc, defaultStatements } from 'better-auth/plugins/admin/access';

export const ac = createAccessControl(defaultStatements);

export const roles = {
  admin: ac.newRole({ ...adminAc.statements }),
  agent: ac.newRole({}),
  customer: ac.newRole({}),
};
