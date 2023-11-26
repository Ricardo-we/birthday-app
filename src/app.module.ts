import { Module } from '@nestjs/common';
import { BirthDaysModule } from './birthdays/birthdays.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [BirthDaysModule, EmailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
