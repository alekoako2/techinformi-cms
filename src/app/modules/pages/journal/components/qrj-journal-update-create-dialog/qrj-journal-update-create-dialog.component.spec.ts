import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjJournalUpdateCreateDialogComponent } from './qrj-journal-update-create-dialog.component';

describe('QrjJournalUpdateCreateDialogComponent', () => {
  let component: QrjJournalUpdateCreateDialogComponent;
  let fixture: ComponentFixture<QrjJournalUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjJournalUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
