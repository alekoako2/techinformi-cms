import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferNetworksComponent } from './technology-transfer-networks.component';

describe('TechnologyTransferNetworksComponent', () => {
  let component: TechnologyTransferNetworksComponent;
  let fixture: ComponentFixture<TechnologyTransferNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
