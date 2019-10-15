import {State, Action, StateContext, Store} from '@ngxs/store';

import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {ResearchProjectService} from '../services/research-project.service';
import {
  CountResearchProjects,
  CreateResearchProject,
  DeleteResearchProject,
  GetResearchProject,
  LoadResearchProjects, UpdateResearchProject
} from './research-project.actions';
import {ResearchProjectQuery_researchProject, ResearchProjectsQuery_researchProjects} from '../../../../types/operation-result-types';

export class ResearchProjectStateModel {
  public researchProjects: ResearchProjectsQuery_researchProjects[];
  public count: number;
  public researchProject: ResearchProjectQuery_researchProject;
}

@State<ResearchProjectStateModel>({
  name: 'researchProject',
})
export class ResearchProjectState {
  constructor(private store: Store, private researchProjectService: ResearchProjectService) {
  }

  @Action(CountResearchProjects)
  countAll({patchState}: StateContext<ResearchProjectStateModel>) {

    return this.researchProjectService.researchProjectsCount().pipe(take(1), tap(res => {

      patchState({count: res.countResearchProjects});

    }));
  }

  @Action(LoadResearchProjects)
  loadResearchProjects({patchState}: StateContext<ResearchProjectStateModel>, action: LoadResearchProjects) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.researchProjectService.loadResearchProjects(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({researchProjects: res.researchProjects});

    }));
  }

  @Action(GetResearchProject)
  getResearchProject({patchState}: StateContext<ResearchProjectStateModel>, action: GetResearchProject) {
    return this.researchProjectService.getResearchProject(action.payload.id).pipe(first(), tap(res => {
      patchState({researchProject: res.researchProject});
    }));
  }

  @Action(DeleteResearchProject)
  deleteResearchProject(ctx: StateContext<ResearchProjectStateModel>, action: DeleteResearchProject) {
    return this.researchProjectService.deleteResearchProject(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          researchProjects: removeItem<ResearchProjectsQuery_researchProjects>(researchProject => researchProject.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateResearchProject)
  addResearchProject(ctx: StateContext<ResearchProjectStateModel>, action: CreateResearchProject) {
    return this.researchProjectService.createResearchProject(action.payload).pipe(first(), tap(res => {
      ctx.getState().researchProjects.pop();
      ctx.patchState({
        researchProjects: [
          res.createResearchProject,
          ...ctx.getState().researchProjects
        ]
      });
    }));
  }

  @Action(UpdateResearchProject)
  updateResearchProject(ctx: StateContext<ResearchProjectStateModel>, action: UpdateResearchProject) {
    return this.researchProjectService.updateResearchProject(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          researchProjects: updateItem<ResearchProjectsQuery_researchProjects>(researchProject => researchProject.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
