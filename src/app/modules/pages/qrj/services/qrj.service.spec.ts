import { TestBed } from '@angular/core/testing';

import { QrjService } from './qrj.service';

describe('QrjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrjService = TestBed.get(QrjService);
    expect(service).toBeTruthy();
  });
});
