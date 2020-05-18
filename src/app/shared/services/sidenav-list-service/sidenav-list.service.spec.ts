import { TestBed } from '@angular/core/testing'

import { SidenavListService } from './sidenav-list.service'

describe('SidenavListService', () => {
  let service: SidenavListService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SidenavListService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
