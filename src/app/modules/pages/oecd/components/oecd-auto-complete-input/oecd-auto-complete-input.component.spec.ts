import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OecdAutoCompleteInputComponent } from './oecd-auto-complete-input.component';

describe('OecdAutoCompleteInputComponent', () => {
  let component: OecdAutoCompleteInputComponent;
  let fixture: ComponentFixture<OecdAutoCompleteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OecdAutoCompleteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OecdAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
