import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put } from '@nestjs/common';
import { BirthdayCollectionService } from './birthday-collection.service';
import { BirthDaySchema } from 'src/birthdays/schemas/birthday.schema';
import { AuthGuard } from 'src/users/auth.guard';

@Controller('birthday-collection')
export class BirthdayCollectionController {
  constructor(private readonly birthdayCollectionService: BirthdayCollectionService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBirthdayCollectionDto: BirthDaySchema) {
    return this.birthdayCollectionService.create(createBirthdayCollectionDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() request: Request) {
    const user = request['user'];
    return this.birthdayCollectionService.findAll(user);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.birthdayCollectionService.findOne(code);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBirthdayCollectionDto: BirthDaySchema) {
    return this.birthdayCollectionService.update(+id, updateBirthdayCollectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birthdayCollectionService.remove(+id);
  }
}
