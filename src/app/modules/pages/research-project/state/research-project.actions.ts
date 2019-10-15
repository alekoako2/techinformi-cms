import {
  CreateResearchProjectMutation_createResearchProject,
  UpdateResearchProjectMutation_updateResearchProject
} from '../../../../types/operation-result-types';

export class CountResearchProjects {
  static readonly type = '[ResearchProject] Count ResearchProjects';

  constructor() {
  }
}

export class LoadResearchProjects {
  static readonly type = '[ResearchProject] Load ResearchProjects';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetResearchProject {
  static readonly type = '[ResearchProject] Get ResearchProject';

  constructor(public payload: { id }) {
  }
}

export class DeleteResearchProject {
  static readonly type = '[ResearchProject] Delete ResearchProject';

  constructor(public payload: { id }) {
  }
}

export class CreateResearchProject {
  static readonly type = '[ResearchProject] Add ResearchProject';

  constructor(public payload: CreateResearchProjectMutation_createResearchProject
  ) {
  }
}

export class UpdateResearchProject {
  static readonly type = '[ResearchProject] Update ResearchProject';

  constructor(public payload: UpdateResearchProjectMutation_updateResearchProject
  ) {
  }
}
