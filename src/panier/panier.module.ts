import { Panier } from './entities/panier.entity';
import { Module } from '@nestjs/common';
import { PanierService } from './panier.service';
import { PanierController } from './panier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Panier])],
  controllers: [PanierController],
  providers: [PanierService],
})
export class PanierModule {}
