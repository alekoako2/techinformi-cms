import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjJournalsInputDisplayValueFilterAutocompleteComponent } from './qrj-journals-input-display-value-filter-autocomplete.component'

describe('QrjJournalsInputDisplayValueFilterAutocomplete', () => {
  let component: QrjJournalsInputDisplayValueFilterAutocompleteComponent
  let fixture: ComponentFixture<QrjJournalsInputDisplayValueFilterAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjJournalsInputDisplayValueFilterAutocompleteComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(
      QrjJournalsInputDisplayValueFilterAutocompleteComponent
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
