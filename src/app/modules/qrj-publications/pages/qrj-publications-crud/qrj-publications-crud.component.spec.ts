import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjPublicationsCrudComponent } from './qrj-publications-crud.component'

describe('QrjPublicationsComponent', () => {
  let component: QrjPublicationsCrudComponent
  let fixture: ComponentFixture<QrjPublicationsCrudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjPublicationsCrudComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationsCrudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
