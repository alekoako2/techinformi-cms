import { TestBed, async } from '@angular/core/testing'
import { NgxsModule, Store } from '@ngxs/store'
import { NewsesCrudState } from './newses-crud.state'

describe('Newses actions', () => {
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([NewsesCrudState])],
    }).compileComponents()
    store = TestBed.get(Store)
  }))

  it('should create an actions and add an item', () => {
    store.dispatch(new CountNewses())
    store
      .select((state) => state.qrjPublications.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })

  it('should create an actions and add an item', () => {
    store.dispatch(new LoadNewses({ searchText: '1', index: '1', limit: '1' }))
    store
      .select((state) => state.qrjPublications.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })
})
