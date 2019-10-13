import {CreateExpertMutation_createExpert, UpdateExpertMutation_updateExpert} from '../../../../types/operation-result-types';

export class CountExperts {
  static readonly type = '[Expert] Count Experts';

  constructor() {
  }
}

export class LoadExperts {
  static readonly type = '[Expert] Load Experts';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetExpert {
  static readonly type = '[Expert] Get Expert';

  constructor(public payload: { id }) {
  }
}

export class DeleteExpert {
  static readonly type = '[Expert] Delete Expert';

  constructor(public payload: { id }) {
  }
}

export class CreateExpert {
  static readonly type = '[Expert] Add Expert';

  constructor(public payload: CreateExpertMutation_createExpert
  ) {
  }
}

export class UpdateExpert {
  static readonly type = '[Expert] Update Expert';

  constructor(public payload: UpdateExpertMutation_updateExpert
  ) {
  }
}
