import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeleteQrjPublicationDialogComponent } from './delete-qrj-publication-dialog.component'

describe('DeleteQrjPublicationDialogComponent', () => {
  let component: DeleteQrjPublicationDialogComponent
  let fixture: ComponentFixture<DeleteQrjPublicationDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteQrjPublicationDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQrjPublicationDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
