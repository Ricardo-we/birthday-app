import { Injectable } from '@nestjs/common';
import { BirthDayCollectionSchema } from './schemas/birthday-collection.schema.';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateRandomCode } from 'src/utils/string.utils';
import { User } from '@prisma/client';

@Injectable()
export class BirthdayCollectionService {
  constructor(private prisma: PrismaService) {}

  create(createBirthdayCollectionDto: BirthDayCollectionSchema) {
    try{
      return this.prisma.birthdayCollection.create({
        data: {
          code: generateRandomCode(4),
          name: createBirthdayCollectionDto.name,
        },
      });
    } catch(err){
      return this.create(createBirthdayCollectionDto);
    }
  }

  findAll(user: User) {
    return this.prisma.birthdayCollection.findMany({
      where: {user_id: user?.id}
    });
  }

  findOne(code: string) {
    return this.prisma.birthdayCollection.findUnique({
      where: {
        code,
      },
      include: {
        birthDays: true,
      }
    });    
  }

  update(id: number, updateBirthdayCollectionDto: BirthDayCollectionSchema) {
    return `This action updates a #${id} birthdayCollection`;
  }

  remove(id: number) {
    return `This action removes a #${id} birthdayCollection`;
  }
}
