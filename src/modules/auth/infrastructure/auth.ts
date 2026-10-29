// src/modules/auth/infrastructure/auth.ts

import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { admin } from 'better-auth/plugins';
import { Pool } from 'pg';
import { Role } from '../domain/role.js';
import { ac, roles } from './permissions.js';

export const auth = betterAuth({
  database: new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: '-c search_path=auth',
  }),
  emailAndPassword: { enabled: true },
  plugins: [admin({ ac, roles, defaultRole: Role.CUSTOMER })],
});
