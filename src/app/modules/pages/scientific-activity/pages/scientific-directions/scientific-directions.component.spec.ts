import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificDirectionsComponent } from './scientific-directions.component';

describe('ScientificDirectionsComponent', () => {
  let component: ScientificDirectionsComponent;
  let fixture: ComponentFixture<ScientificDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
