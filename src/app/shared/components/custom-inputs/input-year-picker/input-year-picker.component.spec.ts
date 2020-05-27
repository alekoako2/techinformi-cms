import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { InputYearPickerComponent } from './input-year-picker.component'

describe('InputYearPickerComponent', () => {
  let component: InputYearPickerComponent
  let fixture: ComponentFixture<InputYearPickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputYearPickerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InputYearPickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
