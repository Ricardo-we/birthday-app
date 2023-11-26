import { ApiProperty } from '@nestjs/swagger';

export class LoginSchema {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}