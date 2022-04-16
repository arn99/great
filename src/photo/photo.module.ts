import { ItemModule } from './../item/item.module';
import { Photo } from 'src/photo/entities/photo.entity';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), ItemModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
