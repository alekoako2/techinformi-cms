import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UpdateQrjPublicationDialogComponent } from './update-qrj-publication-dialog.component'

describe('UpdateQrjPublicationDialog', () => {
  let component: UpdateQrjPublicationDialogComponent
  let fixture: ComponentFixture<UpdateQrjPublicationDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQrjPublicationDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQrjPublicationDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
