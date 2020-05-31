import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UpdateNewsDialogComponent } from './update-news-dialog.component'

describe('UpdateNewsDialog', () => {
  let component: UpdateNewsDialogComponent
  let fixture: ComponentFixture<UpdateNewsDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNewsDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewsDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
