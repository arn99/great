import { Test, TestingModule } from '@nestjs/testing';
import { ActualiteController } from './actualite.controller';
import { ActualiteService } from './actualite.service';

describe('ActualiteController', () => {
  let controller: ActualiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActualiteController],
      providers: [ActualiteService],
    }).compile();

    controller = module.get<ActualiteController>(ActualiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
