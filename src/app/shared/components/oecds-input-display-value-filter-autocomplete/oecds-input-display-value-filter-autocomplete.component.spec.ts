import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OecdsInputDisplayValueFilterAutocompleteComponent } from './oecds-input-display-value-filter-autocomplete.component'

describe('OecdsInputDisplayValueFilterAutocomplete', () => {
  let component: OecdsInputDisplayValueFilterAutocompleteComponent
  let fixture: ComponentFixture<OecdsInputDisplayValueFilterAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OecdsInputDisplayValueFilterAutocompleteComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(
      OecdsInputDisplayValueFilterAutocompleteComponent
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
