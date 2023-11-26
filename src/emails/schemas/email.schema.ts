import { ApiProperty } from '@nestjs/swagger';
import { BirthDaySchema } from 'src/birthdays/schemas/birthday.schema';

export class EmailSchema {
    @ApiProperty()
    email: string;
    @ApiProperty()
    birthDays?: Array<BirthDaySchema>;
}