import { TestBed } from '@angular/core/testing'

import { SliderContentService } from './slider-content.service'

describe('SliderContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: SliderContentService = TestBed.get(SliderContentService)
    expect(service).toBeTruthy()
  })
})
