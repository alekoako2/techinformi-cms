import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplatePaginatorComponent } from './database-template-paginator.component'

describe('DatabaseTemplatePaginatorComponent', () => {
  let component: DatabaseTemplatePaginatorComponent
  let fixture: ComponentFixture<DatabaseTemplatePaginatorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplatePaginatorComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplatePaginatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
