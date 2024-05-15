import { Injectable } from '@nestjs/common';
import { IUserRepository } from './users.interface';
import { BaseRepository } from '@models/base';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class UserRepository
  extends BaseRepository<'User'>
  implements IUserRepository
{
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }
}
