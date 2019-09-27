import {
  CreateOecdMutation_createOecd,
  UpdateOecdMutation_updateOecd
} from '../../../../types/operation-result-types';

export class CountOecds {
  static readonly type = '[Oecd] Count oecds';

  constructor() {
  }
}

export class LoadOecds {
  static readonly type = '[Oecd] Load Oecds';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetOecd {
  static readonly type = '[Oecd] Get Oecd';

  constructor(public payload: { id }) {
  }
}

export class DeleteOecd {
  static readonly type = '[Oecd] Delete Oecd';

  constructor(public payload: { id }) {
  }
}

export class CreateOecd {
  static readonly type = '[Oecd] Add Oecd';

  constructor(public payload: CreateOecdMutation_createOecd
  ) {
  }
}

export class UpdateOecd {
  static readonly type = '[Oecd] Update Oecd';

  constructor(public payload: UpdateOecdMutation_updateOecd
  ) {
  }
}
