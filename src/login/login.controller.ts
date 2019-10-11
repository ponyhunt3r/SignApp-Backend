import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('login')
export class LoginController {
    constructor(private readonly authService: AuthService) {}

    //@UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
      return this.authService.login(req.body);
    }
}
