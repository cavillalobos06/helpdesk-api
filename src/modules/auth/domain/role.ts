// src/modules/auth/domain/role.ts

export const Role = {
  ADMIN: 'admin',
  AGENT: 'agent',
  CUSTOMER: 'customer',
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export function isRole(value: unknown): value is Role {
  return Object.values(Role).includes(value as Role);
}
