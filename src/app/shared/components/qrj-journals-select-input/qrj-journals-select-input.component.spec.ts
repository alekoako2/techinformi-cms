import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjJournalsSelectInputComponent } from './qrj-journals-select-input.component'

describe('QrjJournalsSelectInputComponent', () => {
  let component: QrjJournalsSelectInputComponent
  let fixture: ComponentFixture<QrjJournalsSelectInputComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjJournalsSelectInputComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalsSelectInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
