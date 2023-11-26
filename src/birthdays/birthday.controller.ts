import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { BirthDayService } from './birthday.service';
import { BirthDay } from '@prisma/client';
import { ApiBody, ApiBearerAuth } from "@nestjs/swagger";
import { BirthDaySchema } from './schemas/birthday.schema';
import { AuthGuard } from 'src/users/auth.guard';

@Controller('birthdays')
export class BirthDayController {
    constructor(private readonly birthDayService: BirthDayService) {}

    @Get()
    async getBirthDaysOfMonth(): Promise<BirthDay[]> {
        return this.birthDayService.getMonthBirthDays();
    }   

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiBody({ type: BirthDaySchema })
    @Post()
    async addBirthDay(@Body() birthDay: BirthDay): Promise<BirthDay> {
        return this.birthDayService.createBirthDay(birthDay);
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @ApiBody({ type: BirthDaySchema })
    @Put(":id")
    async updateBirthDay(id: number, @Body() birthDay: BirthDay): Promise<BirthDay> {
        return this.birthDayService.updateBirthDay(id, birthDay);
    }
    
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Delete(":id")
    async deleteBirthDay(id: number,) {
        return this.birthDayService.deleteBirthDay(id);
    }
}
