import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjJournalAutoCompleteInputComponent } from './qrj-journal-auto-complete-input.component';

describe('QrjJournalAutoCompleteInputComponent', () => {
  let component: QrjJournalAutoCompleteInputComponent;
  let fixture: ComponentFixture<QrjJournalAutoCompleteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjJournalAutoCompleteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjJournalAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
