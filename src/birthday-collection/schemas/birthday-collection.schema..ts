import { ApiProperty } from '@nestjs/swagger';

export class BirthDayCollectionSchema {
    @ApiProperty()
    name: string;
}