import {State, Action, StateContext, Store} from '@ngxs/store';
import {ExpertQuery_expert, ExpertsQuery_experts} from '../../../../types/operation-result-types';
import {ExpertService} from '../../expert/services/expert.service';
import {CountExperts, CreateExpert, DeleteExpert, GetExpert, LoadExperts, UpdateExpert} from '../../expert/state/expert.actions';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';

export class ExpertStateModel {
  public experts: ExpertsQuery_experts[];
  public count: number;
  public expert: ExpertQuery_expert;
}

@State<ExpertStateModel>({
  name: 'expert',
})
export class ExpertState {
  constructor(private store: Store, private expertService: ExpertService) {
  }

  @Action(CountExperts)
  countAll({patchState}: StateContext<ExpertStateModel>) {

    return this.expertService.expertsCount().pipe(take(1), tap(res => {

      patchState({count: res.countExperts});

    }));
  }

  @Action(LoadExperts)
  loadExperts({patchState}: StateContext<ExpertStateModel>, action: LoadExperts) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.expertService.loadExperts(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({experts: res.experts});

    }));
  }

  @Action(GetExpert)
  getExpert({patchState}: StateContext<ExpertStateModel>, action: GetExpert) {
    return this.expertService.getExpert(action.payload.id).pipe(first(), tap(res => {
      patchState({expert: res.expert});
    }));
  }

  @Action(DeleteExpert)
  deleteExpert(ctx: StateContext<ExpertStateModel>, action: DeleteExpert) {
    return this.expertService.deleteExpert(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          experts: removeItem<ExpertsQuery_experts>(expert => expert.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateExpert)
  addExpert(ctx: StateContext<ExpertStateModel>, action: CreateExpert) {
    return this.expertService.createExpert(action.payload).pipe(first(), tap(res => {
      ctx.getState().experts.pop();
      ctx.patchState({
        experts: [
          res.createExpert,
          ...ctx.getState().experts
        ]
      });
    }));
  }

  @Action(UpdateExpert)
  updateExpert(ctx: StateContext<ExpertStateModel>, action: UpdateExpert) {
    return this.expertService.updateExpert(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          experts: updateItem<ExpertsQuery_experts>(expert => expert.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
