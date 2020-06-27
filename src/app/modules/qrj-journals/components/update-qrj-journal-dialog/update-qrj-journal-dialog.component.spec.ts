import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UpdateQrjJournalDialogComponent } from './update-qrj-journal-dialog.component'

describe('UpdateQrjJournalDialog', () => {
  let component: UpdateQrjJournalDialogComponent
  let fixture: ComponentFixture<UpdateQrjJournalDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQrjJournalDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQrjJournalDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
