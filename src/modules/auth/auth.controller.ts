import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { GetCurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthDto) {
    return this.authService.signinLocal(loginDto);
  }

  @Post('logout')
  async logout(@GetCurrentUserId() userId: number) {
    return this.authService.logout(userId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('me')
  async me(@GetCurrentUserId() userId: number, @GetCurrentUser() user: any) {
    console.log(userId);
    console.log(user);

    return user;
  }

  // @Get('refresh')
  // async refreshToken(@Req() req: Request) {
  //   const user = req.user as IRefreshJWT;

  //   const userId = user.userId;
  //   const refreshToken = user.refreshToken;

  //   return this.authService.refreshTokens(userId, refreshToken);
  // }
}
