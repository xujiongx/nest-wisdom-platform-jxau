import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('getSession')
  async getSession(@Query('code') code: string) {
    return {
      code: 0,
      data: await this.authService.getSession(code),
    };
  }

  @Get('login')
  async login(@Query('userInfo') userInfo: string) {
    return {
      code: 0,
      data: await this.authService.login(JSON.parse(userInfo)),
    };
  }
  @Get('getUserInfo')
  async getUserInfo(@Query('openid') openid: string) {
    return {
      code: 0,
      data: await this.authService.getUserInfo(openid),
    };
  }
}
