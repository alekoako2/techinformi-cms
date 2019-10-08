import {TestBed} from '@angular/core/testing';

import {TechnologyTransferNetworkService} from './technology-transfer-networks.service';

describe('TechnologyTransferNetworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologyTransferNetworkService = TestBed.get(TechnologyTransferNetworkService);
    expect(service).toBeTruthy();
  });
});
