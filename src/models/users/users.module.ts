import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { USER_REPOSITORY_TOKEN, USER_SERVICE_TOKEN } from './users.interface';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserRepository } from './users.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
    {
      provide: USER_SERVICE_TOKEN,
      useClass: UserService,
    },
  ],
  exports: [USER_SERVICE_TOKEN],
})
export class UsersModule {}
