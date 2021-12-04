import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PanierService } from './panier.service';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';

@Controller('panier')
export class PanierController {
  constructor(private readonly panierService: PanierService) {}

  @Post()
  create(@Body() createPanierDto: CreatePanierDto) {
    return this.panierService.create(createPanierDto);
  }

  @Get()
  findAll() {
    return this.panierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePanierDto: UpdatePanierDto) {
    return this.panierService.update(+id, updatePanierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panierService.remove(+id);
  }
}
