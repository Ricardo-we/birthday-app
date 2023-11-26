import { ApiProperty } from '@nestjs/swagger';
import { EmailSchema } from 'src/emails/schemas/email.schema';

export class BirthDaySchema {
    @ApiProperty()
    name: string;
    @ApiProperty()
    date: Date;
    @ApiProperty()
    alertEmails?: Array<EmailSchema>;
}