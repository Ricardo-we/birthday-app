import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Email } from '@prisma/client';

@Injectable()
export class EmailsService {
    constructor(private readonly prisma: PrismaService) { }

    addEmail(email: Email) {
        return this.prisma.email.create({
            data: email,
        });
    }

    getAllEmails() {
        return this.prisma.email.findMany();
    }

    deleteEmail(id: number) {
        return this.prisma.email.delete({ where: { id } });
    }

    updateEmail(id: number, email: Email) {
        return this.prisma.email.update({
            where: { id },
            data: email,
        });
    }

}
