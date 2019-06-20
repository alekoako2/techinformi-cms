import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjDialogComponent } from './qrj-dialog.component';

describe('QrjDialogComponent', () => {
  let component: QrjDialogComponent;
  let fixture: ComponentFixture<QrjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
