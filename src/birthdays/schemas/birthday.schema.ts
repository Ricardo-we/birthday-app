import { ApiProperty } from '@nestjs/swagger';

export class BirthDaySchema {
    @ApiProperty()
    name: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    collection_id?: number;

}