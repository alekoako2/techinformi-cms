import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent } from './technology-transfer-and-innovation-organization-update-create-dialog.component';

describe('TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent', () => {
  let component: TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent;
  let fixture: ComponentFixture<TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
