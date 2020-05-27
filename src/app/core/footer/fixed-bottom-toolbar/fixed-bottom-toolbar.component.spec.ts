import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FixedBottomToolbarComponent } from './fixed-bottom-toolbar.component'

describe('FixedBottomToolbarComponent', () => {
  let component: FixedBottomToolbarComponent
  let fixture: ComponentFixture<FixedBottomToolbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedBottomToolbarComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBottomToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
