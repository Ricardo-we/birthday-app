import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { simpleDate } from "src/utils/objects/SimpleDate";
import { BirthDay } from "@prisma/client";

@Injectable()
export class BirthDayService {

    constructor(private prisma: PrismaService){}

    getMonthBirthDays(): Promise<BirthDay[]> {
        return this.prisma.birthDay.findMany({
            where: {
                date: {
                    gte: simpleDate().setDayOfMonth(1).b(),
                    lte: simpleDate().lastDayOfMonth().b(),
                },
            },
        });
    }

    createBirthDay(birthDay: BirthDay): Promise<BirthDay> {
        return this.prisma.birthDay.create({
            data: birthDay,
        });
    }

    updateBirthDay(id: number, birthDay: BirthDay): Promise<BirthDay> {
        return this.prisma.birthDay.update({
            where: {
                id,
            },
            data: birthDay,
        });
    }

    deleteBirthDay(id: number): Promise<BirthDay> {
        return this.prisma.birthDay.delete({
            where: {
                id,
            },
        });
    }

}