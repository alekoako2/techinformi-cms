import { TestBed } from '@angular/core/testing'

import { ResearchProjectsService } from './research-projects.service'

describe('ResearchProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: ResearchProjectsService = TestBed.get(
      ResearchProjectsService
    )
    expect(service).toBeTruthy()
  })
})
