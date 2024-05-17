import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto';
import { GetCurrentUserId } from 'src/shared/decorators/get-current-user-id.decorator';
import { GetCurrentUser } from 'src/shared/decorators/get-current-user.decorator';
import { Auth } from 'src/shared/decorators/auth/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: CredentialsDto) {
    return this.authService.signinLocal(loginDto);
  }

  @Post('logout')
  async logout(@GetCurrentUserId() userId: number) {
    return this.authService.logout(userId);
  }

  @Auth('ADMIN', 'USER')
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
