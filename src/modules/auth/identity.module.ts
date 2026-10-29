// src/modules/auth/identity.module.ts

import { Module } from '@nestjs/common';
import { MeController } from './presentation/me.controller.js';

@Module({ controllers: [MeController] })
export class IdentityModule {}
