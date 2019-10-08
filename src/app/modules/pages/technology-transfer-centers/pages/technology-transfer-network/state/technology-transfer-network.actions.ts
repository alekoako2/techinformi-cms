import {
  CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork,
  UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork
} from '../../../../../../types/operation-result-types';

export class CountTechnologyTransferNetworks {
  static readonly type = '[TechnologyTransferNetwork] Count TechnologyTransferNetworks';

  constructor() {
  }
}

export class LoadTechnologyTransferNetworks {
  static readonly type = '[TechnologyTransferNetwork] Load TechnologyTransferNetworks';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetTechnologyTransferNetwork {
  static readonly type = '[TechnologyTransferNetwork] Get TechnologyTransferNetwork';

  constructor(public payload: { id }) {
  }
}

export class DeleteTechnologyTransferNetwork {
  static readonly type = '[TechnologyTransferNetwork] Delete TechnologyTransferNetwork';

  constructor(public payload: { id }) {
  }
}

export class CreateTechnologyTransferNetwork {
  static readonly type = '[TechnologyTransferNetwork] Add TechnologyTransferNetwork';

  constructor(public payload: CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork
  ) {
  }
}

export class UpdateTechnologyTransferNetwork {
  static readonly type = '[TechnologyTransferNetwork] Update TechnologyTransferNetwork';

  constructor(public payload: UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork
  ) {
  }
}
