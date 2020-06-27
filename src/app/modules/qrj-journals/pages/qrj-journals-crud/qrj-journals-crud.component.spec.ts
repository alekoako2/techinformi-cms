import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjJournalsCrudComponent } from './qrj-journals-crud.component'

describe('QrjJournalsComponent', () => {
  let component: QrjJournalsCrudComponent
  let fixture: ComponentFixture<QrjJournalsCrudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjJournalsCrudComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalsCrudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
