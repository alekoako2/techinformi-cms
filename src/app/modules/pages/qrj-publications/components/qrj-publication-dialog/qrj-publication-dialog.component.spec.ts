import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjPublicationDialogComponent } from './qrj-publication-dialog.component';

describe('QrjPublicationDialogComponent', () => {
  let component: QrjPublicationDialogComponent;
  let fixture: ComponentFixture<QrjPublicationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjPublicationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
