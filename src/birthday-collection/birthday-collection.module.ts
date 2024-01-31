import { Module } from '@nestjs/common';
import { BirthdayCollectionService } from './birthday-collection.service';
import { BirthdayCollectionController } from './birthday-collection.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BirthdayCollectionController],
  providers: [BirthdayCollectionService, PrismaService],
})
export class BirthdayCollectionModule {}
