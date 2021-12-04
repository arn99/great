import { Test, TestingModule } from '@nestjs/testing';
import { PanierController } from './panier.controller';
import { PanierService } from './panier.service';

describe('PanierController', () => {
  let controller: PanierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanierController],
      providers: [PanierService],
    }).compile();

    controller = module.get<PanierController>(PanierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
