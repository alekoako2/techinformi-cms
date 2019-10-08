import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferNetworkDeleteDialogComponent } from './technology-transfer-network-delete-dialog.component';

describe('TechnologyTransferNetworkDeleteDialogComponent', () => {
  let component: TechnologyTransferNetworkDeleteDialogComponent;
  let fixture: ComponentFixture<TechnologyTransferNetworkDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferNetworkDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferNetworkDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
