import { Action, State, StateContext, Store } from '@ngxs/store'
import {
  AddQrjJournal,
  DeleteQrjJournal,
  LoadQrjJournals,
  UpdateQrjJournal,
} from '../actions/qrj-journals-crud.actions'
import {
  CreateQrjJournalMutation,
  DeleteQrjJournalMutation,
  QrjJournal,
  QrjJournalsQuery,
  UpdateQrjJournalMutation,
} from '@graphql'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { patch, updateItem } from '@ngxs/store/operators'
import { QrjJournalService } from '@http/qrj-journal-service'

export class QrjJournalsStateModel {
  public qrjJournals: QrjJournal[]
  public countQrjJournals: number
}

@State<QrjJournalsStateModel>({
  name: 'qrjJournals',
  defaults: {
    qrjJournals: [],
    countQrjJournals: 0,
  },
})
@Injectable()
export class QrjJournalsCrudState {
  constructor(
    private store: Store,
    private qrjJournalsService: QrjJournalService
  ) {}

  @Action(LoadQrjJournals)
  loadQrjJournals(
    { patchState }: StateContext<QrjJournalsStateModel>,
    { payload: { searchText, pageIndex, pageSize } }: LoadQrjJournals
  ): Observable<QrjJournalsQuery> {
    return this.qrjJournalsService
      .fetchAll(
        {
          name: searchText,
        },
        pageIndex,
        pageSize
      )
      .pipe(
        first(),
        tap(({ qrjJournals, countQrjJournals }: QrjJournalsQuery) => {
          patchState({ qrjJournals, countQrjJournals })
        })
      )
  }

  @Action(AddQrjJournal)
  addQrjJournal(
    { getState, patchState }: StateContext<QrjJournalsStateModel>,
    { payload: { qrjJournalCreateInput } }: AddQrjJournal
  ): Observable<CreateQrjJournalMutation> {
    const { qrjJournals, countQrjJournals } = getState()
    return this.qrjJournalsService.create(qrjJournalCreateInput).pipe(
      first(),
      tap(({ createQrjJournal }: CreateQrjJournalMutation) => {
        patchState({
          qrjJournals: [createQrjJournal, ...qrjJournals.slice(0, -1)],
          countQrjJournals: countQrjJournals + 1,
        })
      })
    )
  }

  @Action(UpdateQrjJournal)
  updateQrjJournal(
    { setState }: StateContext<QrjJournalsStateModel>,
    { payload: { qrjJournalUpdateInput } }: UpdateQrjJournal
  ): Observable<UpdateQrjJournalMutation> {
    return this.qrjJournalsService.update(qrjJournalUpdateInput).pipe(
      first(),
      tap(({ updateQrjJournal }: UpdateQrjJournalMutation) => {
        setState(
          patch({
            qrjJournals: updateItem<QrjJournal>(
              (qrjJournal: QrjJournal) => qrjJournal.id === updateQrjJournal.id,
              patch(updateQrjJournal)
            ),
          })
        )
      })
    )
  }

  @Action(DeleteQrjJournal)
  deleteQrjJournal(
    { getState, patchState }: StateContext<QrjJournalsStateModel>,
    { payload: { id } }: DeleteQrjJournal
  ): Observable<DeleteQrjJournalMutation> {
    const { qrjJournals, countQrjJournals } = getState()
    return this.qrjJournalsService.delete(id).pipe(
      first(),
      tap(() => {
        patchState({
          qrjJournals: qrjJournals.filter((qrjJournal) => qrjJournal.id !== id),
          countQrjJournals: countQrjJournals - 1,
        })
      })
    )
  }
}
