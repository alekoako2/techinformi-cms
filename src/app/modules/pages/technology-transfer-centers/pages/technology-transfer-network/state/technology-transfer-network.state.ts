import {State, Action, StateContext, Store} from '@ngxs/store';
import {
  CountTechnologyTransferNetworks,
  CreateTechnologyTransferNetwork,
  DeleteTechnologyTransferNetwork,
  GetTechnologyTransferNetwork,
  LoadTechnologyTransferNetworks,
  UpdateTechnologyTransferNetwork
} from './technology-transfer-network.actions';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {
  TechnologyTransferNetworkQuery_technologyTransferNetwork,
  TechnologyTransferNetworksQuery_technologyTransferNetworks
} from '../../../../../../types/operation-result-types';
import {TechnologyTransferNetworkService} from '../../../services/technology-transfer-network.service';

export class TechnologyTransferNetworkStateModel {
  public technologyTransferNetworks: TechnologyTransferNetworksQuery_technologyTransferNetworks[];
  public count: number;
  public technologyTransferNetwork: TechnologyTransferNetworkQuery_technologyTransferNetwork;
}

@State<TechnologyTransferNetworkStateModel>({
  name: 'technologyTransferNetwork',
})

export class TechnologyTransferNetworkState {
  constructor(private store: Store, private technologyTransferNetworkService: TechnologyTransferNetworkService) {
  }

  @Action(CountTechnologyTransferNetworks)
  countAll({patchState}: StateContext<TechnologyTransferNetworkStateModel>) {

    return this.technologyTransferNetworkService.technologyTransferNetworksCount().pipe(take(1), tap(res => {

      patchState({count: res.countTechnologyTransferNetworks});

    }));
  }

  @Action(LoadTechnologyTransferNetworks)
  loadTechnologyTransferNetworks({patchState}: StateContext<TechnologyTransferNetworkStateModel>, action: LoadTechnologyTransferNetworks) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.technologyTransferNetworkService.loadTechnologyTransferNetworks(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({technologyTransferNetworks: res.technologyTransferNetworks});

    }));
  }

  @Action(GetTechnologyTransferNetwork)
  getTechnologyTransferNetwork({patchState}: StateContext<TechnologyTransferNetworkStateModel>, action: GetTechnologyTransferNetwork) {
    return this.technologyTransferNetworkService.getTechnologyTransferNetwork(action.payload.id).pipe(first(), tap(res => {
      patchState({technologyTransferNetwork: res.technologyTransferNetwork});
    }));
  }

  @Action(DeleteTechnologyTransferNetwork)
  deleteTechnologyTransferNetwork(ctx: StateContext<TechnologyTransferNetworkStateModel>, action: DeleteTechnologyTransferNetwork) {
    return this.technologyTransferNetworkService.deleteTechnologyTransferNetwork(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          technologyTransferNetworks: removeItem<TechnologyTransferNetworksQuery_technologyTransferNetworks>(technologyTransferNetwork => technologyTransferNetwork.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateTechnologyTransferNetwork)
  addTechnologyTransferNetwork(ctx: StateContext<TechnologyTransferNetworkStateModel>, action: CreateTechnologyTransferNetwork) {
    return this.technologyTransferNetworkService.createTechnologyTransferNetwork(action.payload).pipe(first(), tap(res => {
      ctx.getState().technologyTransferNetworks.pop();
      ctx.patchState({
        technologyTransferNetworks: [
          res.createTechnologyTransferNetwork,
          ...ctx.getState().technologyTransferNetworks
        ]
      });
    }));
  }

  @Action(UpdateTechnologyTransferNetwork)
  updateTechnologyTransferNetwork(ctx: StateContext<TechnologyTransferNetworkStateModel>, action: UpdateTechnologyTransferNetwork) {
    return this.technologyTransferNetworkService.updateTechnologyTransferNetwork(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          technologyTransferNetworks: updateItem<TechnologyTransferNetworksQuery_technologyTransferNetworks>(technologyTransferNetwork => technologyTransferNetwork.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
