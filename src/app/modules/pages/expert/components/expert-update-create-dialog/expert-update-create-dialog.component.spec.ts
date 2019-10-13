import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertUpdateCreateDialogComponent } from './expert-update-create-dialog.component';

describe('ExpertUpdateCreateDialogComponent', () => {
  let component: ExpertUpdateCreateDialogComponent;
  let fixture: ComponentFixture<ExpertUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
