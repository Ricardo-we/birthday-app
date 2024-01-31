import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { comparePlainToEncrypted, encrypt } from 'src/utils/crypt.utils';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email: email },
            select: {
                id: true,
                email: true,
                password: true,
                rol: true,
            }
        });

        if(!user) throw new NotFoundException("User not found");

        if(comparePlainToEncrypted(password, user.password)) return user;
        
        return null;
    }

    async create(email: string, password: string) {
        return this.prisma.user.create({
            data: {
                email,
                password: encrypt(password)
            }
        });
    }
}
