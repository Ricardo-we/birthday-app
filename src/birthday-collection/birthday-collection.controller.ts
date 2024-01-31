import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { BirthdayCollectionService } from './birthday-collection.service';
import { BirthDaySchema } from 'src/birthdays/schemas/birthday.schema';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('birthday-collection')
export class BirthdayCollectionController {
  constructor(private readonly birthdayCollectionService: BirthdayCollectionService) {}

  @Post()
  create(@Body() createBirthdayCollectionDto: BirthDaySchema) {
    return this.birthdayCollectionService.create(createBirthdayCollectionDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    const user = request['user'];
    return this.birthdayCollectionService.findAll(user);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.birthdayCollectionService.findOne(code);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBirthdayCollectionDto: BirthDaySchema) {
    return this.birthdayCollectionService.update(+id, updateBirthdayCollectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birthdayCollectionService.remove(+id);
  }
}
