import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post } from '@nestjs/common';
import { LoginSchema } from './schemas/login.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() user: LoginSchema){
        return this.authService.loginUser(user.email, user.password);
    }
}
