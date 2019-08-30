import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OecdUpdateCreateDialogComponent } from './oecd-update-create-dialog.component';

describe('OecdUpdateCreateDialogComponent', () => {
  let component: OecdUpdateCreateDialogComponent;
  let fixture: ComponentFixture<OecdUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OecdUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OecdUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
