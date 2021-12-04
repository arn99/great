import { Test, TestingModule } from '@nestjs/testing';
import { PanierService } from './panier.service';

describe('PanierService', () => {
  let service: PanierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanierService],
    }).compile();

    service = module.get<PanierService>(PanierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
