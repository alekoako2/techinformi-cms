import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeleteNewsDialogComponent } from './delete-news-dialog.component'

describe('DeleteNewsDialogComponent', () => {
  let component: DeleteNewsDialogComponent
  let fixture: ComponentFixture<DeleteNewsDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteNewsDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
