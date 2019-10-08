import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjDeleteDialogComponent } from './qrj-delete-dialog.component';

describe('QrjDeleteDialogComponent', () => {
  let component: QrjDeleteDialogComponent;
  let fixture: ComponentFixture<QrjDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
