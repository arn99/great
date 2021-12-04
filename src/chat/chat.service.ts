import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private readonly repository: Repository<Chat>,
  ) {}
  create(createChatDto: CreateChatDto) {
    const chat = this.repository.create(createChatDto);
    return this.repository.save(chat);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateChatDto: UpdateChatDto) {
    const chat = await this.repository.preload({
      id: id,
      ...updateChatDto,
    });
    if (!chat) {
      throw new NotFoundException(`Chat ${id} not found`);
    }
    return this.repository.save(chat);
  }

  async remove(id: string) {
    const chat = await this.findOne(id);
    return this.repository.remove(chat);
  }
}
