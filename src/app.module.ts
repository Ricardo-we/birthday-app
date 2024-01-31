import { Module } from '@nestjs/common';
import { BirthDaysModule } from './birthdays/birthdays.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BirthdayCollectionModule } from './birthday-collection/birthday-collection.module';
import config from './config';

@Module({
  imports: [
    BirthDaysModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '100d' },
    }),
    BirthdayCollectionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }