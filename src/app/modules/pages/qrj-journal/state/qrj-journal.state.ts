import {State, Action, StateContext, Store} from '@ngxs/store';
import {
  QrjJournalQuery_qrjJournal,
  QrjJournalsQuery_qrjJournals
} from '../../../../types/operation-result-types';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {QrjJournalService} from '../JournalService/qrj-journal.service';
import {
  CountQrjJournals,
  CreateQrjJournal,
  DeleteQrjJournal,
  GetQrjJournal,
  LoadQrjJournals,
  UpdateQrjJournal
} from './qrj-journal.actions';

export class QrjJournalStateModel {
  public qrjJournals: QrjJournalsQuery_qrjJournals[];
  public count: number;
  public qrjJournal: QrjJournalQuery_qrjJournal;
}

@State<QrjJournalStateModel>({
  name: 'qrjJournal'
})

export class QrjJournalState {
  constructor(private store: Store, private qrjJournalService: QrjJournalService) {
  }

  @Action(CountQrjJournals)
  countAll({patchState}: StateContext<QrjJournalStateModel>) {
    return this.qrjJournalService.qrjJournalsCount().pipe(take(1), tap(res => {

      patchState({count: res.countQrjJournals});

    }));
  }

  @Action(LoadQrjJournals)
  loadQrjJournals({patchState}: StateContext<QrjJournalStateModel>, action: LoadQrjJournals) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;
    return this.qrjJournalService.loadQrjJournals({searchText, index, limit}).pipe(take(1), tap(res => {


      patchState({qrjJournals: res.qrjJournals});

    }));
  }

  @Action(GetQrjJournal)
  getQrjJournal({patchState}: StateContext<QrjJournalStateModel>, action: GetQrjJournal) {
    return this.qrjJournalService.getQrjJournal(action.payload.id).pipe(first(), tap(res => {
      patchState({qrjJournal: res.qrjJournal});
    }));
  }

  @Action(DeleteQrjJournal)
  deleteQrjJournal(ctx: StateContext<QrjJournalStateModel>, action: DeleteQrjJournal) {
    return this.qrjJournalService.deleteQrjJournal(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjJournals: removeItem<QrjJournalsQuery_qrjJournals>(qrjJournal => qrjJournal.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateQrjJournal)
  addQrjJournal(ctx: StateContext<QrjJournalStateModel>, action: CreateQrjJournal) {
    return this.qrjJournalService.createQrjJournal(action.payload).pipe(first(), tap(res => {
      ctx.getState().qrjJournals.pop();
      ctx.patchState({
        qrjJournals: [
          res.createQrjJournal,
          ...ctx.getState().qrjJournals
        ]
      });
    }));
  }

  @Action(UpdateQrjJournal)
  updateQrjJournal(ctx: StateContext<QrjJournalStateModel>, action: UpdateQrjJournal) {
    return this.qrjJournalService.updateQrjJournal(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjJournals: updateItem<QrjJournalsQuery_qrjJournals>(qrjJournal => qrjJournal.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
