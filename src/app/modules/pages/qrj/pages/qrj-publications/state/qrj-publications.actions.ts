import {QrjPublicationQuery_qrjPublication} from '../../../../../../types/operation-result-types';

export class CountQrjPublications {
  static readonly type = '[QrjPublications] Count Publications';

  constructor() {
  }
}

export class LoadQrjPublications {
  static readonly type = '[QrjPublications] Load Publications';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetQrjPublication {
  static readonly type = '[QrjPublications] Get Publication';

  constructor(public payload: { id }) {
  }
}

export class DeleteQrjPublication {
  static readonly type = '[QrjPublications] Delete Publication';

  constructor(public payload: { id }) {
  }
}

export class AddQrjPublication {
  static readonly type = '[QrjPublications] Add Publication';

  constructor(public payload: QrjPublicationQuery_qrjPublication
  ) {
  }
}

export class UpdateQrjPublication {
  static readonly type = '[QrjPublications] Update Publication';

  constructor(public payload: QrjPublicationQuery_qrjPublication
  ) {
  }
}
