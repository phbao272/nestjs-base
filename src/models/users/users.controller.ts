import { Controller } from '@nestjs/common';
import { IUserService, InjectUserService } from './users.interface';

@Controller('users')
export class UserController {
  constructor(@InjectUserService private readonly userService: IUserService) {}
}
