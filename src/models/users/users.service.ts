import { BaseService } from '@models/base';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import {
  IUserRepository,
  IUserService,
  InjectUserRepository,
} from './users.interface';

@Injectable()
export class UserService extends BaseService<'User'> implements IUserService {
  constructor(
    @InjectUserRepository
    private readonly userRepository: IUserRepository,
    private readonly prisma: PrismaService,
  ) {
    super(userRepository);
  }
}
