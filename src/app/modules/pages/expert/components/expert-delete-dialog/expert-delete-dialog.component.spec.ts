import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDeleteDialogComponent } from './expert-delete-dialog.component';

describe('ExpertDeleteDialogComponent', () => {
  let component: ExpertDeleteDialogComponent;
  let fixture: ComponentFixture<ExpertDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
