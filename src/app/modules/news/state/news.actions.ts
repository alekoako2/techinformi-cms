import {
  CreateNewsMutation_createNews,
  UpdateNewsMutation_updateNews,
} from '../../../types/operation-result-types'

export class CountNewses {
  static readonly type = '[News] Count Newses'

  constructor() {}
}

export class LoadNewses {
  static readonly type = '[News] Load Newses'

  constructor(
    public payload: {
      searchText
      index
      limit
    }
  ) {}
}

export class GetNews {
  static readonly type = '[News] Get News'

  constructor(public payload: { id }) {}
}

export class DeleteNews {
  static readonly type = '[News] Delete News'

  constructor(public payload: { id }) {}
}

export class CreateNews {
  static readonly type = '[News] Add News'

  constructor(public payload: CreateNewsMutation_createNews) {}
}

export class UpdateNews {
  static readonly type = '[News] Update News'

  constructor(public payload: UpdateNewsMutation_updateNews) {}
}
