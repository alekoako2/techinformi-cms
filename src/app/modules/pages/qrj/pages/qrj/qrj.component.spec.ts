import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjComponent } from './qrj.component';

describe('QrjComponent', () => {
  let component: QrjComponent;
  let fixture: ComponentFixture<QrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
