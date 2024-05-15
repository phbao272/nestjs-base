import { Inject } from '@nestjs/common';
import { IBaseRepository, IBaseService } from '@models/base';

// Repository
export interface IUserRepository extends IBaseRepository<'User'> {}
export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN');
export const InjectUserRepository = Inject(USER_REPOSITORY_TOKEN);

// Service
export interface IUserService extends IBaseService<'User'> {}
export const USER_SERVICE_TOKEN = Symbol('USER_SERVICE_TOKEN');
export const InjectUserService = Inject(USER_SERVICE_TOKEN);
