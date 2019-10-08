import {State, Action, StateContext, Store} from '@ngxs/store';
import {
  CountTechnologyTransferAndInnovationOrganizations,
  CreateTechnologyTransferAndInnovationOrganization,
  DeleteTechnologyTransferAndInnovationOrganization,
  GetTechnologyTransferAndInnovationOrganization,
  LoadTechnologyTransferAndInnovationOrganizations,
  UpdateTechnologyTransferAndInnovationOrganization
} from './technology-transfer-and-innovation-organization.actions';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {
  TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization,
  TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations
} from '../../../../../../types/operation-result-types';
import {TechnologyTransferAndInnovationOrganizationService} from '../../../services/technology-transfer-and-innovation-organization.service';

export class TechnologyTransferAndInnovationOrganizationStateModel {
  public technologyTransferAndInnovationOrganizations: TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations[];
  public count: number;
  public technologyTransferAndInnovationOrganization: TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization;
}

@State<TechnologyTransferAndInnovationOrganizationStateModel>({
  name: 'technologyTransferAndInnovationOrganization',
})

export class TechnologyTransferAndInnovationOrganizationState {
  constructor(private store: Store, private technologyTransferAndInnovationOrganizationService: TechnologyTransferAndInnovationOrganizationService) {
  }

  @Action(CountTechnologyTransferAndInnovationOrganizations)
  countAll({patchState}: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>) {

    return this.technologyTransferAndInnovationOrganizationService.technologyTransferAndInnovationOrganizationsCount().pipe(take(1), tap(res => {

      patchState({count: res.countTechnologyTransferAndInnovationOrganizations});

    }));
  }

  @Action(LoadTechnologyTransferAndInnovationOrganizations)
  loadTechnologyTransferAndInnovationOrganizations({patchState}: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>, action: LoadTechnologyTransferAndInnovationOrganizations) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.technologyTransferAndInnovationOrganizationService.loadTechnologyTransferAndInnovationOrganizations(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({technologyTransferAndInnovationOrganizations: res.technologyTransferAndInnovationOrganizations});

    }));
  }

  @Action(GetTechnologyTransferAndInnovationOrganization)
  getTechnologyTransferAndInnovationOrganization({patchState}: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>, action: GetTechnologyTransferAndInnovationOrganization) {
    return this.technologyTransferAndInnovationOrganizationService.getTechnologyTransferAndInnovationOrganization(action.payload.id).pipe(first(), tap(res => {
      patchState({technologyTransferAndInnovationOrganization: res.technologyTransferAndInnovationOrganization});
    }));
  }

  @Action(DeleteTechnologyTransferAndInnovationOrganization)
  deleteTechnologyTransferAndInnovationOrganization(ctx: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>, action: DeleteTechnologyTransferAndInnovationOrganization) {
    return this.technologyTransferAndInnovationOrganizationService.deleteTechnologyTransferAndInnovationOrganization(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          technologyTransferAndInnovationOrganizations: removeItem<TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations>(technologyTransferAndInnovationOrganization => technologyTransferAndInnovationOrganization.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateTechnologyTransferAndInnovationOrganization)
  addTechnologyTransferAndInnovationOrganization(ctx: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>, action: CreateTechnologyTransferAndInnovationOrganization) {
    return this.technologyTransferAndInnovationOrganizationService.createTechnologyTransferAndInnovationOrganization(action.payload).pipe(first(), tap(res => {
      ctx.getState().technologyTransferAndInnovationOrganizations.pop();
      ctx.patchState({
        technologyTransferAndInnovationOrganizations: [
          res.createTechnologyTransferAndInnovationOrganization,
          ...ctx.getState().technologyTransferAndInnovationOrganizations
        ]
      });
    }));
  }

  @Action(UpdateTechnologyTransferAndInnovationOrganization)
  updateTechnologyTransferAndInnovationOrganization(ctx: StateContext<TechnologyTransferAndInnovationOrganizationStateModel>, action: UpdateTechnologyTransferAndInnovationOrganization) {
    return this.technologyTransferAndInnovationOrganizationService.updateTechnologyTransferAndInnovationOrganization(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          technologyTransferAndInnovationOrganizations: updateItem<TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations>(technologyTransferAndInnovationOrganization => technologyTransferAndInnovationOrganization.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
