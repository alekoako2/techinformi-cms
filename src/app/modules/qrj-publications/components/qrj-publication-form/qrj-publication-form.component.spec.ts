import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjPublicationFormComponent } from './qrj-publication-form.component';

describe('QrjPublicationFormComponent', () => {
  let component: QrjPublicationFormComponent;
  let fixture: ComponentFixture<QrjPublicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjPublicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
