import { TestBed } from '@angular/core/testing'

import { ExpertsService } from './experts.service'

describe('ExpertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: ExpertsService = TestBed.get(ExpertsService)
    expect(service).toBeTruthy()
  })
})
