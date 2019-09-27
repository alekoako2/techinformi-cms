import {State, Action, StateContext, Store} from '@ngxs/store';
import {CountOecds, CreateOecd, DeleteOecd, GetOecd, LoadOecds, UpdateOecd} from './oecd.actions';
import {OecdQuery_oecd, OecdsQuery_oecds} from '../../../../types/operation-result-types';
import {OecdService} from '../OecdService/oecd.service';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';

export class OecdStateModel {
  public oecds: OecdsQuery_oecds[];
  public count: number;
  public oecd: OecdQuery_oecd;
}

@State<OecdStateModel>({
  name: 'oecd'
})

export class OecdState {
  constructor(private store: Store, private oecdService: OecdService) {
  }

  @Action(CountOecds)
  countAll({patchState}: StateContext<OecdStateModel>) {
    return this.oecdService.oecdsCount().pipe(take(1), tap(res => {

      patchState({count: res.countOecds});

    }));
  }

  @Action(LoadOecds)
  loadOecds({patchState}: StateContext<OecdStateModel>, action: LoadOecds) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.oecdService.loadOecds(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({oecds: res.oecds});

    }));
  }

  @Action(GetOecd)
  getOecd({patchState}: StateContext<OecdStateModel>, action: GetOecd) {
    return this.oecdService.getOecd(action.payload.id).pipe(first(), tap(res => {
      patchState({oecd: res.oecd});
    }));
  }

  @Action(DeleteOecd)
  deleteOecd(ctx: StateContext<OecdStateModel>, action: DeleteOecd) {
    return this.oecdService.deleteOecd(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          oecds: removeItem<OecdsQuery_oecds>(oecd => oecd.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateOecd)
  addOecd(ctx: StateContext<OecdStateModel>, action: CreateOecd) {
    return this.oecdService.createOecd(action.payload).pipe(first(), tap(res => {
      ctx.getState().oecds.pop();
      ctx.patchState({
        oecds: [
          res.createOecd,
          ...ctx.getState().oecds
        ]
      });
    }));
  }

  @Action(UpdateOecd)
  updateOecd(ctx: StateContext<OecdStateModel>, action: UpdateOecd) {
    return this.oecdService.updateOecd(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          oecds: updateItem<OecdsQuery_oecds>(oecd => oecd.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
