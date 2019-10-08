import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnologyTransferNetworkComponent} from './technology-transfer-network.component';

describe('TechnologyTransferNetworksComponent', () => {
  let component: TechnologyTransferNetworkComponent;
  let fixture: ComponentFixture<TechnologyTransferNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyTransferNetworkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
