import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeleteQrjJournalDialogComponent } from './delete-qrj-journal-dialog.component'

describe('DeleteQrjJournalDialogComponent', () => {
  let component: DeleteQrjJournalDialogComponent
  let fixture: ComponentFixture<DeleteQrjJournalDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteQrjJournalDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQrjJournalDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
