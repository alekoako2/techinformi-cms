import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferAndInnovationOrganizationDeleteDialogComponent } from './technology-transfer-and-innovation-organization-delete-dialog.component';

describe('TechnologyTransferAndInnovationOrganizationDeleteDialogComponent', () => {
  let component: TechnologyTransferAndInnovationOrganizationDeleteDialogComponent;
  let fixture: ComponentFixture<TechnologyTransferAndInnovationOrganizationDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferAndInnovationOrganizationDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferAndInnovationOrganizationDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
