import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavListComponent } from './vertical-nav-list.component';

describe('VerticalNavListComponent', () => {
  let component: VerticalNavListComponent;
  let fixture: ComponentFixture<VerticalNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
