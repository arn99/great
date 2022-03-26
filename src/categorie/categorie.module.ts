import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import { Categorie } from './entities/categorie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categorie])],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}
