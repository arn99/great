import { Actualite } from './entities/actualite.entity';
import { Module } from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { ActualiteController } from './actualite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Actualite])],
  controllers: [ActualiteController],
  providers: [ActualiteService],
})
export class ActualiteModule {}
