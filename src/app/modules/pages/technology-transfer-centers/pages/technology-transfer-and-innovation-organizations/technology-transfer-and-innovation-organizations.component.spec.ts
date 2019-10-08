import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferAndInnovationOrganizationsComponent } from './technology-transfer-and-innovation-organizations.component';

describe('TechnologyTransferAndInnovationOrganizationsComponent', () => {
  let component: TechnologyTransferAndInnovationOrganizationsComponent;
  let fixture: ComponentFixture<TechnologyTransferAndInnovationOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferAndInnovationOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferAndInnovationOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
