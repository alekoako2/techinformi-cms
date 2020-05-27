import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplateListComponent } from './database-template-list.component'

describe('DatabaseTemplateListComponent', () => {
  let component: DatabaseTemplateListComponent
  let fixture: ComponentFixture<DatabaseTemplateListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplateListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplateListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
