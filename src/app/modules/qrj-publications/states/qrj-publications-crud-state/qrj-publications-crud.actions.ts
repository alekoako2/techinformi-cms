import { QrjPublicationCreateInput, QrjPublicationUpdateInput } from '@graphql'

export class CountQrjPublications {
  static readonly type = '[QrjPublications] Count'
}

export class LoadQrjPublications {
  static readonly type = '[QrjPublications] Fetch All'

  constructor(
    public payload: {
      searchText
      pageIndex
      pageSize
    }
  ) {}
}

export class GetQrjPublication {
  static readonly type = '[QrjPublications] Fetch One'

  constructor(public payload: { id }) {}
}

export class DeleteQrjPublication {
  static readonly type = '[QrjPublications] Delete'

  constructor(public payload: { id }) {}
}

export class AddQrjPublication {
  static readonly type = '[QrjPublications] Add'

  constructor(public payload: QrjPublicationCreateInput) {}
}

export class UpdateQrjPublication {
  static readonly type = '[QrjPublications] Update'

  constructor(public payload: QrjPublicationUpdateInput) {}
}
