import { TestBed } from '@angular/core/testing';

import { TechnologyTransferAndInnovationOrganizationService } from './technology-transfer-and-innovation-organization.service';

describe('TechnologyTransferAndInnovationOrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologyTransferAndInnovationOrganizationService = TestBed.get(TechnologyTransferAndInnovationOrganizationService);
    expect(service).toBeTruthy();
  });
});
