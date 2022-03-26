import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';
import { Panier } from './entities/panier.entity';

@Injectable()
export class PanierService {
  constructor(
    @InjectRepository(Panier) private readonly repository: Repository<Panier>,
  ) {}
  create(createPanierDto: CreatePanierDto) {
    const panier = this.repository.create(createPanierDto);
    return this.repository.save(panier);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updatePanierDto: UpdatePanierDto) {
    const panier = await this.repository.preload({
      id: id,
      ...updatePanierDto,
    });
    if (!panier) {
      throw new NotFoundException(`Panier ${id} not found`);
    }
    return this.repository.save(panier);
  }

  async remove(id: string) {
    const panier = await this.findOne(id);
    return this.repository.remove(panier);
  }
}
