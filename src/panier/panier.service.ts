import { Injectable } from '@nestjs/common';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';

@Injectable()
export class PanierService {
  create(createPanierDto: CreatePanierDto) {
    return 'This action adds a new panier';
  }

  findAll() {
    return `This action returns all panier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} panier`;
  }

  update(id: number, updatePanierDto: UpdatePanierDto) {
    return `This action updates a #${id} panier`;
  }

  remove(id: number) {
    return `This action removes a #${id} panier`;
  }
}
