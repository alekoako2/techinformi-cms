import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DatabaseTemplateComponent } from './database-template.component'

describe('DatabaseTemplateComponent', () => {
  let component: DatabaseTemplateComponent
  let fixture: ComponentFixture<DatabaseTemplateComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseTemplateComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTemplateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
