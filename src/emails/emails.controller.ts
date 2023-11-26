import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiBearerAuth } from "@nestjs/swagger";
import { Email } from '@prisma/client';
import { EmailsService } from './emails.service';
import { EmailSchema } from './schemas/email.schema';
import { AuthGuard } from 'src/users/auth.guard';

@Controller('emails')
export class EmailsController {
    constructor(private readonly emailsService: EmailsService) { }

    @Get()
    async getEmails() {
        return this.emailsService.getAllEmails();
    }
    
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiBody({ type: EmailSchema })
    @Post()
    addEmail(@Body() email: Email) {
        return this.emailsService.addEmail(email);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiBody({ type: EmailSchema })
    @Put(":id")
    updateEmail(id: number, @Body() email: Email) {
        return this.emailsService.updateEmail(email.id, email);
    }
    
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Delete(":id")
    deleteEmail(id: number) {
        return this.emailsService.deleteEmail(id);
    }
}
