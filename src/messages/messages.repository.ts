import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    public async findOne(id: string): Promise<any> {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    public async findAll(): Promise<any> {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages;
    }

    public async create(content: string): Promise<void> {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        const messageObj = {
            content,
            id,
        };
        messages[id] = messageObj;
        await writeFile('messages.json', JSON.stringify(messages), 'utf-8');
    }
}