import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnologyTransferAndInnovationOrganizationComponent} from './technology-transfer-and-innovation-organizations.component';

describe('TechnologyTransferAndInnovationOrganizationsComponent', () => {
  let component: TechnologyTransferAndInnovationOrganizationComponent;
  let fixture: ComponentFixture<TechnologyTransferAndInnovationOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyTransferAndInnovationOrganizationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferAndInnovationOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
