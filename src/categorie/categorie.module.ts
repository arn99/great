import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';

@Module({
  controllers: [CategorieController],
  providers: [CategorieService]
})
export class CategorieModule {}
