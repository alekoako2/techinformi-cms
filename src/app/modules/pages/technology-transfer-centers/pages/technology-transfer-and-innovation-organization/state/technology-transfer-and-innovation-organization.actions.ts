import {
  CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization,
  UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization
} from '../../../../../../types/operation-result-types';

export class CountTechnologyTransferAndInnovationOrganizations {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Count TechnologyTransferAndInnovationOrganizations';

  constructor() {
  }
}

export class LoadTechnologyTransferAndInnovationOrganizations {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Load TechnologyTransferAndInnovationOrganizations';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetTechnologyTransferAndInnovationOrganization {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Get TechnologyTransferAndInnovationOrganization';

  constructor(public payload: { id }) {
  }
}

export class DeleteTechnologyTransferAndInnovationOrganization {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Delete TechnologyTransferAndInnovationOrganization';

  constructor(public payload: { id }) {
  }
}

export class CreateTechnologyTransferAndInnovationOrganization {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Add TechnologyTransferAndInnovationOrganization';

  constructor(public payload: CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization
  ) {
  }
}

export class UpdateTechnologyTransferAndInnovationOrganization {
  static readonly type = '[TechnologyTransferAndInnovationOrganization] Update TechnologyTransferAndInnovationOrganization';

  constructor(public payload: UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization
  ) {
  }
}
