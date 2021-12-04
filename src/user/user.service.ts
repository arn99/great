import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const item = await this.repository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!item) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.repository.save(item);
  }

  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
