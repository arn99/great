import { Module } from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { ActualiteController } from './actualite.controller';

@Module({
  controllers: [ActualiteController],
  providers: [ActualiteService]
})
export class ActualiteModule {}
