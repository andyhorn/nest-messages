import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
    constructor(private messagesRepository: MessagesRepository) { }

    public async findOne(id: string): Promise<any> {
        return await this.messagesRepository.findOne(id);
    }

    public async findAll(): Promise<any> {
        return await this.messagesRepository.findAll();
    }

    public async create(content: string): Promise<void> {
        await this.messagesRepository.create(content);
    }
}