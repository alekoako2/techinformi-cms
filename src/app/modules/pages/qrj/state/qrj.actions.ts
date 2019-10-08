import {CreateQrjMutation_createQrj, UpdateQrjMutation_updateQrj} from '../../../../types/operation-result-types';

export class CountQrjs {
  static readonly type = '[Qrj] Count qrjs';

  constructor() {
  }
}

export class LoadQrjs {
  static readonly type = '[Qrj] Load Qrjs';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetQrj {
  static readonly type = '[Qrj] Get Qrj';

  constructor(public payload: { id }) {
  }
}

export class DeleteQrj {
  static readonly type = '[Qrj] Delete Qrj';

  constructor(public payload: { id }) {
  }
}

export class CreateQrj {
  static readonly type = '[Qrj] Add Qrj';

  constructor(public payload: CreateQrjMutation_createQrj
  ) {
  }
}

export class UpdateQrj {
  static readonly type = '[Qrj] Update Qrj';

  constructor(public payload: UpdateQrjMutation_updateQrj
  ) {
  }
}
