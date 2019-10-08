import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjUpdateCreateDialogComponent } from './qrj-update-create-dialog.component';

describe('QrjUpdateCreateDialogComponent', () => {
  let component: QrjUpdateCreateDialogComponent;
  let fixture: ComponentFixture<QrjUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
