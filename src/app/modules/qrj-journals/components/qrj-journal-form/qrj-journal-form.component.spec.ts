import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjJournalFormComponent } from './qrj-journal-form.component'

describe('QrjJournalFormComponent', () => {
  let component: QrjJournalFormComponent
  let fixture: ComponentFixture<QrjJournalFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjJournalFormComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
