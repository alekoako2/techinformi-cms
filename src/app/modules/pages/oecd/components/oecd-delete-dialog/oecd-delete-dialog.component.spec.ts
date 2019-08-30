import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OecdDeleteDialogComponent } from './oecd-delete-dialog.component';

describe('OecdDeleteDialogComponent', () => {
  let component: OecdDeleteDialogComponent;
  let fixture: ComponentFixture<OecdDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OecdDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OecdDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
