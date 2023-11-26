import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { Email } from '@prisma/client';

@Controller('emails')
export class EmailsController {
    constructor(private readonly emailsService: EmailsService){}

    @Get()
    async getEmails(){
        return this.emailsService.getAllEmails();
    }

    @Post()
    addEmail(@Body() email: Email){
        return this.emailsService.addEmail(email);
    }

    @Put(":id")
    updateEmail(id: number, @Body() email: Email){
        return this.emailsService.updateEmail(email.id, email);
    }

    @Delete(":id")
    deleteEmail(id: number){
       return this.emailsService.deleteEmail(id);
    }
}
