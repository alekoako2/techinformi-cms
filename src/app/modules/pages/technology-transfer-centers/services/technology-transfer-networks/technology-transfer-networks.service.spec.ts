import { TestBed } from '@angular/core/testing';

import { TechnologyTransferNetworksService } from './technology-transfer-networks.service';

describe('TechnologyTransferNetworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologyTransferNetworksService = TestBed.get(TechnologyTransferNetworksService);
    expect(service).toBeTruthy();
  });
});
