import {TestBed} from '@angular/core/testing';

import {QrjPublicationService} from './qrjPublication.service';

describe('PublicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrjPublicationService = TestBed.get(QrjPublicationService);
    expect(service).toBeTruthy();
  });
});
