import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesStructureComponent } from './employees-structure.component';

describe('EmployeesStructureComponent', () => {
  let component: EmployeesStructureComponent;
  let fixture: ComponentFixture<EmployeesStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
