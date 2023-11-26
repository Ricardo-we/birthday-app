import { Module } from '@nestjs/common';
import { BirthDaysModule } from './birthdays/birthdays.module';
import { EmailsModule } from './emails/emails.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import config from './config';

@Module({
  imports: [
    BirthDaysModule,
    EmailsModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '100d' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }