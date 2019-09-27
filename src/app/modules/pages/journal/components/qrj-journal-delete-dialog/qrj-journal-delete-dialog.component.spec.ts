import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjJournalDeleteDialogComponent } from './qrj-journal-delete-dialog.component';

describe('QrjJournalDeleteDialogComponent', () => {
  let component: QrjJournalDeleteDialogComponent;
  let fixture: ComponentFixture<QrjJournalDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjJournalDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
