import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipDialogComponent } from './partnership-dialog.component';

describe('PartnershipDialogComponent', () => {
  let component: PartnershipDialogComponent;
  let fixture: ComponentFixture<PartnershipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
