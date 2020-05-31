import { NewsCreateInput, NewsUpdateInput } from '@graphql'

export class CountNewses {
  static readonly type = '[Newses] Count'
}

export class LoadNewses {
  static readonly type = '[Newses] Fetch All'

  constructor(
    public payload: {
      searchText
      pageIndex
      pageSize
    }
  ) {}
}

export class AddNews {
  static readonly type = '[Newses] Add'

  constructor(public payload: { newsCreateInput: NewsCreateInput }) {}
}

export class UpdateNews {
  static readonly type = '[Newses] Update'

  constructor(public payload: { newsUpdateInput: NewsUpdateInput }) {}
}

export class DeleteNews {
  static readonly type = '[Newses] Delete'

  constructor(public payload: { id }) {}
}
