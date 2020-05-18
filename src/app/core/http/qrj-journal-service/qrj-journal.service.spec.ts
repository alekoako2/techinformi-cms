import { TestBed } from '@angular/core/testing'

import { QrjJournalService } from './qrj-journal.service'

describe('QrjJournalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: QrjJournalService = TestBed.get(QrjJournalService)
    expect(service).toBeTruthy()
  })
})
