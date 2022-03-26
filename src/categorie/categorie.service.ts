import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/entities/item.entity';
import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private readonly repository: Repository<Categorie>,
  ) {}
  create(createCategorieDto: CreateCategorieDto) {
    const categorie = this.repository.create(createCategorieDto);
    return this.repository.save(categorie);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateCategorieDto: UpdateCategorieDto) {
    const categorie = await this.repository.preload({
      id: id,
      ...updateCategorieDto,
    });
    if (!categorie) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(categorie);
  }

  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
