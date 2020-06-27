import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateQrjJournalDialogComponent } from './create-qrj-journal-dialog.component'

describe('CreateQrjJournalDialog', () => {
  let component: CreateQrjJournalDialogComponent
  let fixture: ComponentFixture<CreateQrjJournalDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQrjJournalDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQrjJournalDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
