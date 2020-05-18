import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OecdsFilterAutocompleteComponent } from './oecds-filter-autocomplete.component'

describe('OecdsSelectInputComponent', () => {
  let component: OecdsFilterAutocompleteComponent
  let fixture: ComponentFixture<OecdsFilterAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OecdsFilterAutocompleteComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OecdsFilterAutocompleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
