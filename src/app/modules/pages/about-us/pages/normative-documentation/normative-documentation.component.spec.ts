import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativeDocumentationComponent } from './normative-documentation.component';

describe('NormativeDocumentationComponent', () => {
  let component: NormativeDocumentationComponent;
  let fixture: ComponentFixture<NormativeDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativeDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativeDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
