import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UpsertQrjPublicationDialogComponent } from './upsert-qrj-publication-dialog.component'

describe('UpsertQrjPublicationDialog', () => {
  let component: UpsertQrjPublicationDialogComponent
  let fixture: ComponentFixture<UpsertQrjPublicationDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertQrjPublicationDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertQrjPublicationDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
