import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InputDisplayValueFilterAutocompleteComponent } from './input-display-value-filter-autocomplete.component'

describe('InputDisplayValueFilterAutocomplete', () => {
  let component: InputDisplayValueFilterAutocompleteComponent
  let fixture: ComponentFixture<InputDisplayValueFilterAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputDisplayValueFilterAutocompleteComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(
      InputDisplayValueFilterAutocompleteComponent
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
