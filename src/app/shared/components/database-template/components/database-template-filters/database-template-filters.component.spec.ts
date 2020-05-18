import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplateFiltersComponent } from './database-template-filters.component'

describe('DatabaseTemplateFiltersComponent', () => {
  let component: DatabaseTemplateFiltersComponent
  let fixture: ComponentFixture<DatabaseTemplateFiltersComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplateFiltersComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplateFiltersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
