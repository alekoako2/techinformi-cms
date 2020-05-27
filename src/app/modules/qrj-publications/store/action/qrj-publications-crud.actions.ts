import { QrjPublicationCreateInput, QrjPublicationUpdateInput } from '@graphql'
import { FormModel } from '../../components/qrj-publication-form/qrj-publication-form.component'

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

export class AddQrjPublication {
  static readonly type = '[QrjPublications] Add'

  constructor(
    public payload: { qrjPublicationCreateInput: QrjPublicationCreateInput }
  ) {}
}

export class UpdateQrjPublication {
  static readonly type = '[QrjPublications] Update'

  constructor(
    public payload: { qrjPublicationUpdateInput: QrjPublicationUpdateInput }
  ) {}
}

export class DeleteQrjPublication {
  static readonly type = '[QrjPublications] Delete'

  constructor(public payload: { id }) {}
}
