import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OecdsSelectInputComponent } from './oecds-select-input.component'

describe('OecdsSelectInputComponent', () => {
  let component: OecdsSelectInputComponent
  let fixture: ComponentFixture<OecdsSelectInputComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OecdsSelectInputComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OecdsSelectInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
