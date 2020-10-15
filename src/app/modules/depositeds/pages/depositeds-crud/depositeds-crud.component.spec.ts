import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DepositedsCrudComponent } from './depositeds-crud.component'

describe('QrjPublicationsComponent', () => {
  let component: DepositedsCrudComponent
  let fixture: ComponentFixture<DepositedsCrudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositedsCrudComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositedsCrudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
