import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplateListItemComponent } from './database-template-list-item.component'

describe('DatabaseTemplateListItemComponent', () => {
  let component: DatabaseTemplateListItemComponent
  let fixture: ComponentFixture<DatabaseTemplateListItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplateListItemComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplateListItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
