import { TestBed, async } from '@angular/core/testing'
import { NgxsModule, Store } from '@ngxs/store'
import { QrjJournalsCrudState } from './qrj-journals-crud.state'
import {
  CountQrjJournals,
  LoadQrjJournals,
} from '../actions/qrj-journals-crud.actions'

describe('QrjJournals actions', () => {
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([QrjJournalsCrudState])],
    }).compileComponents()
    store = TestBed.get(Store)
  }))

  it('should create an actions and add an item', () => {
    store.dispatch(new CountQrjJournals())
    store
      .select((state) => state.qrjJournals.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })

  it('should create an actions and add an item', () => {
    store.dispatch(
      new LoadQrjJournals({ searchText: '1', pageSize: 1, pageIndex: 1 })
    )
    store
      .select((state) => state.qrjJournals.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })
})
