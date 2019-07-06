import { TestBed } from '@angular/core/testing';

import { OecdService } from './oecd.service';

describe('OecdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OecdService = TestBed.get(OecdService);
    expect(service).toBeTruthy();
  });
});
