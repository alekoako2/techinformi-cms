import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateDepositedDialogComponent } from './create-deposited-dialog.component'

describe('CreateQrjPublicationDialog', () => {
  let component: CreateDepositedDialogComponent
  let fixture: ComponentFixture<CreateDepositedDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDepositedDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepositedDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
