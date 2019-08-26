import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QrjPublicationsComponent} from './qrj-publications.component';

describe('QrjPublicationsComponent', () => {
  let component: QrjPublicationsComponent;
  let fixture: ComponentFixture<QrjPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjPublicationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
