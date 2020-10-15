import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UpdateDepositedDialogComponent } from './update-deposited-dialog.component'

describe('UpdateQrjPublicationDialog', () => {
  let component: UpdateDepositedDialogComponent
  let fixture: ComponentFixture<UpdateDepositedDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDepositedDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepositedDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
