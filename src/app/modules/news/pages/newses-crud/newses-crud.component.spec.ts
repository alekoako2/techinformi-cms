import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NewsesCrudComponent } from './newses-crud.component'

describe('IndexComponent', () => {
  let component: NewsesCrudComponent
  let fixture: ComponentFixture<NewsesCrudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsesCrudComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsesCrudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
