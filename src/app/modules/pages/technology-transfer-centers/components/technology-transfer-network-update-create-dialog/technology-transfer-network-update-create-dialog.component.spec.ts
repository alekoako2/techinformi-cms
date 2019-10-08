import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferNetworkUpdateCreateDialogComponent } from './technology-transfer-network-update-create-dialog.component';

describe('TechnologyTransferNetworkUpdateCreateDialogComponent', () => {
  let component: TechnologyTransferNetworkUpdateCreateDialogComponent;
  let fixture: ComponentFixture<TechnologyTransferNetworkUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferNetworkUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferNetworkUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
