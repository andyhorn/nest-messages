import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './models/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) { }

    @Get()
    public getMessageList() {
        return this.messagesService.findAll();
    }

    @Post()
    public createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    public async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
