import { Test, TestingModule } from '@nestjs/testing';
import { ActualiteService } from './actualite.service';

describe('ActualiteService', () => {
  let service: ActualiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualiteService],
    }).compile();

    service = module.get<ActualiteService>(ActualiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
