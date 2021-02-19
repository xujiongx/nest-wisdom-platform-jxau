import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get('getSession')
    getSession(@Query('code') code: string) {
        console.log(111,code)
        return {
            code: 0,
            data: this.authService.getSession(code)
        };
    }

    @Get('login')
    login(@Query('userInfo') userInfo: {}) {
        return {
            code: 0,
            data: this.authService.login(userInfo)
        };
    }
}
