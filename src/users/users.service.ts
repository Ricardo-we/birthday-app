import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { comparePlainToEncrypted } from 'src/utils/crypt.utils';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email: email },
        });

        if(comparePlainToEncrypted(password, user.password)) return user;
        
        return null;
    }
}
