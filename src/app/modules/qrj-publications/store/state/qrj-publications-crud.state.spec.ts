import { TestBed, async } from '@angular/core/testing'
import { NgxsModule, Store } from '@ngxs/store'
import { QrjPublicationsCrudState } from './qrj-publications-crud.state'
import {
  CountQrjPublications,
  LoadQrjPublications,
} from '../action/qrj-publications-crud.actions'

describe('QrjPublications actions', () => {
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([QrjPublicationsCrudState])],
    }).compileComponents()
    store = TestBed.get(Store)
  }))

  it('should create an action and add an item', () => {
    store.dispatch(new CountQrjPublications())
    store
      .select((state) => state.qrjPublications.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })

  it('should create an action and add an item', () => {
    store.dispatch(
      new LoadQrjPublications({ searchText: '1', index: '1', limit: '1' })
    )
    store
      .select((state) => state.qrjPublications.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })
})
