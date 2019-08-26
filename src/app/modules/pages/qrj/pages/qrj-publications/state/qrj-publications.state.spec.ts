import {TestBed, async} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {QrjPublicationsState} from './qrj-publications.state';
import {CountQrjPublications, LoadQrjPublications} from './qrj-publications.actions';

describe('QrjPublications actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([QrjPublicationsState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new CountQrjPublications());
    store.select(state => state.qrjPublications.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining(['item-1']));
    });
  });

  it('should create an action and add an item', () => {
    store.dispatch(new LoadQrjPublications({searchText: '1', index: '1', limit: '1'}));
    store.select(state => state.qrjPublications.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining(['item-1']));
    });
  });

});
