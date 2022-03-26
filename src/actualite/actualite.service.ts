import { Actualite } from './entities/actualite.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActualiteDto } from './dto/create-actualite.dto';
import { UpdateActualiteDto } from './dto/update-actualite.dto';

@Injectable()
export class ActualiteService {
  constructor(
    @InjectRepository(Actualite)
    private readonly repository: Repository<Actualite>,
  ) {}
  create(createActualiteDto: CreateActualiteDto) {
    const actualite = this.repository.create(createActualiteDto);
    return this.repository.save(actualite);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateActualiteDto: UpdateActualiteDto) {
    const actualite = await this.repository.preload({
      id: id,
      ...updateActualiteDto,
    });
    if (!actualite) {
      throw new NotFoundException(`Actualite ${id} not found`);
    }
    return this.repository.save(actualite);
  }

  async remove(id: string) {
    const actulite = await this.findOne(id);
    return this.repository.remove(actulite);
  }
}
