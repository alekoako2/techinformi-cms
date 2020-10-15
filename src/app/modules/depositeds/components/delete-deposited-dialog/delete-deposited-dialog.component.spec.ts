import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeleteDepositedDialogComponent } from './delete-deposited-dialog.component'

describe('DeleteQrjPublicationDialogComponent', () => {
  let component: DeleteDepositedDialogComponent
  let fixture: ComponentFixture<DeleteDepositedDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDepositedDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepositedDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
