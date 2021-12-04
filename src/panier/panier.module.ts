import { Module } from '@nestjs/common';
import { PanierService } from './panier.service';
import { PanierController } from './panier.controller';

@Module({
  controllers: [PanierController],
  providers: [PanierService]
})
export class PanierModule {}
