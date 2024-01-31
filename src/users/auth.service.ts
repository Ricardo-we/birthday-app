import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private jwtService: JwtService
    ) { }


    async loginUser(email: string, password: string) {
        const user = await this.usersService.findOne(email, password);

        return {
            user,
            token: await this.jwtService.signAsync(user),
        };
    }

    async signUp(data: {email: string, password: string}) {
        const user = await this.usersService.create(data.email, data.password);

        return {
            user,
            token: await this.jwtService.signAsync(user),
        };
    }
}
