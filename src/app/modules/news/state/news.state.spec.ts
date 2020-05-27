import { TestBed, async } from '@angular/core/testing'
import { NgxsModule, Store } from '@ngxs/store'
import { NewsState } from './news.store'
import { NewsAction } from './news.actions'

describe('News actions', () => {
  let store: Store

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([NewsState])],
    }).compileComponents()
    store = TestBed.get(Store)
  }))

  it('should create an action and add an item', () => {
    store.dispatch(new NewsAction('item-1'))
    store
      .select((state) => state.news.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']))
      })
  })
})
