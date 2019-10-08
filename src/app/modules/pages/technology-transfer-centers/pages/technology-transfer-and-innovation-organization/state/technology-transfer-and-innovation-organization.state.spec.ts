import {TestBed, async} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {TechnologyTransferAndInnovationOrganizationState} from './technology-transfer-network.state';
import {TechnologyTransferNetworkAction} from './technology-transfer-network.actions';

describe('TechnologyTransferNetwork actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TechnologyTransferAndInnovationOrganizationState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new TechnologyTransferNetworkAction('item-1'));
    store.select(state => state.technologyTransferNetwork.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining(['item-1']));
    });
  });

});
