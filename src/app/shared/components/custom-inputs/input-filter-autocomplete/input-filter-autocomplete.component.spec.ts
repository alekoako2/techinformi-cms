import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InputFilterAutocompleteComponent } from './input-filter-autocomplete.component'

describe('InputFilterAutocomplete', () => {
  let component: InputFilterAutocompleteComponent
  let fixture: ComponentFixture<InputFilterAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputFilterAutocompleteComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilterAutocompleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
