import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { InputSelectWithKeyComponent } from './input-select-with-key.component'

describe('InputSelectWithKeyComponent', () => {
  let component: InputSelectWithKeyComponent
  let fixture: ComponentFixture<InputSelectWithKeyComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectWithKeyComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectWithKeyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
