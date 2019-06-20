import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSearchComponent } from './responsive-search.component';

describe('ResponsiveSearchComponent', () => {
  let component: ResponsiveSearchComponent;
  let fixture: ComponentFixture<ResponsiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
