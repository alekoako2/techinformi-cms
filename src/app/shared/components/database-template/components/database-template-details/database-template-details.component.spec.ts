import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplateDetailsComponent } from './database-template-details.component'

describe('DatabaseTemplateDetailsComponent', () => {
  let component: DatabaseTemplateDetailsComponent
  let fixture: ComponentFixture<DatabaseTemplateDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplateDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplateDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
