import {State, Action, StateContext, Store} from '@ngxs/store';
import {CountQrjs, CreateQrj, DeleteQrj, GetQrj, LoadQrjs, UpdateQrj} from './qrj.actions';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {QrjQuery_qrj, QrjsQuery_qrjs} from '../../../../types/operation-result-types';
import {QrjService} from '../services/qrj.service';

export class QrjStateModel {
  public qrjs: QrjsQuery_qrjs[];
  public count: number;
  public qrj: QrjQuery_qrj;
}

@State<QrjStateModel>({
  name: 'qrj',
})
export class QrjState {
  constructor(private store: Store, private qrjService: QrjService) {
  }

  @Action(CountQrjs)
  countAll({patchState}: StateContext<QrjStateModel>) {

    return this.qrjService.qrjsCount().pipe(take(1), tap(res => {

      patchState({count: res.countQrjs});

    }));
  }

  @Action(LoadQrjs)
  loadQrjs({patchState}: StateContext<QrjStateModel>, action: LoadQrjs) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.qrjService.loadQrjs(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({qrjs: res.qrjs});

    }));
  }

  @Action(GetQrj)
  getQrj({patchState}: StateContext<QrjStateModel>, action: GetQrj) {
    return this.qrjService.getQrj(action.payload.id).pipe(first(), tap(res => {
      patchState({qrj: res.qrj});
    }));
  }

  @Action(DeleteQrj)
  deleteQrj(ctx: StateContext<QrjStateModel>, action: DeleteQrj) {
    return this.qrjService.deleteQrj(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjs: removeItem<QrjsQuery_qrjs>(qrj => qrj.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateQrj)
  addQrj(ctx: StateContext<QrjStateModel>, action: CreateQrj) {
    return this.qrjService.createQrj(action.payload).pipe(first(), tap(res => {
      ctx.getState().qrjs.pop();
      ctx.patchState({
        qrjs: [
          res.createQrj,
          ...ctx.getState().qrjs
        ]
      });
    }));
  }

  @Action(UpdateQrj)
  updateQrj(ctx: StateContext<QrjStateModel>, action: UpdateQrj) {
    return this.qrjService.updateQrj(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjs: updateItem<QrjsQuery_qrjs>(qrj => qrj.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
