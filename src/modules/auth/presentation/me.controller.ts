import { Controller, Get } from '@nestjs/common';
import { Session, UserSession } from '@thallesp/nestjs-better-auth';
import { CurrentUser } from '../domain/current-user.js';
import { toCurrentUser } from './to-current-user.js';

@Controller('me')
export class MeController {
  @Get()
  getMe(@Session() session: UserSession): CurrentUser {
    return toCurrentUser(session);
  }
}
