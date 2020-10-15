import { Action, State, StateContext, Store } from '@ngxs/store'
import {
  AddDeposited,
  DeleteDeposited,
  LoadDepositeds,
  UpdateDeposited,
} from '../actions'
import { DepositedService } from '@http/deposited-service/deposited.service'
import {
  CreateDepositedMutation,
  DeleteDepositedMutation,
  Deposited,
  DepositedsQuery,
  UpdateDepositedMutation,
} from '@graphql'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { patch, updateItem } from '@ngxs/store/operators'

export class DepositedsStateModel {
  public depositeds: Deposited[]
  public countDepositeds: number
}

@State<DepositedsStateModel>({
  name: 'depositeds',
  defaults: {
    depositeds: [],
    countDepositeds: 0,
  },
})
@Injectable()
export class DepositedsCrudState {
  constructor(
    private store: Store,
    private depositedsService: DepositedService
  ) {}

  @Action(LoadDepositeds)
  loadDepositeds(
    { patchState }: StateContext<DepositedsStateModel>,
    { payload: { searchText, pageIndex, pageSize } }: LoadDepositeds
  ): Observable<DepositedsQuery> {
    return this.depositedsService
      .fetchAll(
        {
          index: searchText,
        },
        pageIndex,
        pageSize
      )
      .pipe(
        first(),
        tap(({ depositeds, countDepositeds }: DepositedsQuery) => {
          patchState({ depositeds, countDepositeds })
        })
      )
  }

  @Action(AddDeposited)
  addPublication(
    { getState, patchState }: StateContext<DepositedsStateModel>,
    { payload: { depositedCreateInput } }: AddDeposited
  ): Observable<CreateDepositedMutation> {
    const { depositeds, countDepositeds } = getState()
    return this.depositedsService.create(depositedCreateInput).pipe(
      first(),
      tap(({ createDeposited }: CreateDepositedMutation) => {
        patchState({
          depositeds: [createDeposited, ...depositeds.slice(0, -1)],
          countDepositeds: countDepositeds + 1,
        })
      })
    )
  }

  @Action(UpdateDeposited)
  updatePublication(
    { setState }: StateContext<DepositedsStateModel>,
    { payload: { depositedUpdateInput } }: UpdateDeposited
  ): Observable<UpdateDepositedMutation> {
    return this.depositedsService.update(depositedUpdateInput).pipe(
      first(),
      tap(({ updateDeposited }: UpdateDepositedMutation) => {
        setState(
          patch({
            depositeds: updateItem<Deposited>(
              (deposited: Deposited) => deposited.id === updateDeposited.id,
              patch(updateDeposited)
            ),
          })
        )
      })
    )
  }

  @Action(DeleteDeposited)
  deletePublication(
    { getState, patchState }: StateContext<DepositedsStateModel>,
    { payload: { id } }: DeleteDeposited
  ): Observable<DeleteDepositedMutation> {
    const { depositeds, countDepositeds } = getState()
    return this.depositedsService.delete(id).pipe(
      first(),
      tap(() => {
        patchState({
          depositeds: depositeds.filter((deposited) => deposited.id !== id),
          countDepositeds: countDepositeds - 1,
        })
      })
    )
  }
}
