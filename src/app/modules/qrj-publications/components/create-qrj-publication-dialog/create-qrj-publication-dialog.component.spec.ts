import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateQrjPublicationDialogComponent } from './create-qrj-publication-dialog.component'

describe('CreateQrjPublicationDialog', () => {
  let component: CreateQrjPublicationDialogComponent
  let fixture: ComponentFixture<CreateQrjPublicationDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQrjPublicationDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQrjPublicationDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
