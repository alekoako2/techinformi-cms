import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DepositedFormComponent } from './deposited-form.component'

describe('QrjPublicationFormComponent', () => {
  let component: DepositedFormComponent
  let fixture: ComponentFixture<DepositedFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositedFormComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositedFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
