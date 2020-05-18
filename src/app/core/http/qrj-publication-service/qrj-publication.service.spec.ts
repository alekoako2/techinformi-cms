import { TestBed } from '@angular/core/testing'

import { QrjPublicationService } from './qrj-publication.service'

describe('QrjPublicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: QrjPublicationService = TestBed.get(QrjPublicationService)
    expect(service).toBeTruthy()
  })
})
