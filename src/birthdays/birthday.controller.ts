import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BirthDayService } from './birthday.service';
import { BirthDay } from '@prisma/client';

@Controller('birthdays')
export class BirthDayController {
    constructor(private readonly birthDayService: BirthDayService) {}

    @Get()
    async getBirthDaysOfMonth(): Promise<BirthDay[]> {
        return this.birthDayService.getMonthBirthDays();
    }   

    @Post()
    async addBirthDay(@Body() birthDay: BirthDay): Promise<BirthDay> {
        return this.birthDayService.createBirthDay(birthDay);
    }

    @Put(":id")
    async updateBirthDay(id: number, @Body() birthDay: BirthDay): Promise<BirthDay> {
        return this.birthDayService.updateBirthDay(id, birthDay);
    }

    @Delete(":id")
    async deleteBirthDay(id: number,) {
        return this.birthDayService.deleteBirthDay(id);
    }
}
