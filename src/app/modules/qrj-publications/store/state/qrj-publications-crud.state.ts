import { Action, State, StateContext, Store } from '@ngxs/store'
import {
  AddQrjPublication,
  DeleteQrjPublication,
  LoadQrjPublications,
  UpdateQrjPublication,
} from '../action'
import { QrjPublicationService } from '@http/qrj-publication-service'
import {
  CreateQrjPublicationMutation,
  DeleteQrjPublicationMutation,
  QrjPublication,
  QrjPublicationsQuery,
  UpdateQrjPublicationMutation,
} from '@graphql'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { patch, updateItem } from '@ngxs/store/operators'
import set = Reflect.set

export class QrjPublicationsStateModel {
  public qrjPublications: QrjPublication[]
  public countQrjPublications: number
}

@State<QrjPublicationsStateModel>({
  name: 'qrjPublications',
  defaults: {
    qrjPublications: [],
    countQrjPublications: 0,
  },
})
@Injectable()
export class QrjPublicationsCrudState {
  constructor(
    private store: Store,
    private qrjPublicationsService: QrjPublicationService
  ) {}

  @Action(LoadQrjPublications)
  loadQrjPublications(
    { patchState }: StateContext<QrjPublicationsStateModel>,
    { payload: { searchText, pageIndex, pageSize } }: LoadQrjPublications
  ): Observable<QrjPublicationsQuery> {
    return this.qrjPublicationsService
      .fetchAll(
        {
          index: searchText,
        },
        pageIndex,
        pageSize
      )
      .pipe(
        first(),
        tap(
          ({ qrjPublications, countQrjPublications }: QrjPublicationsQuery) => {
            patchState({ qrjPublications, countQrjPublications })
          }
        )
      )
  }

  @Action(AddQrjPublication)
  addPublication(
    { getState, patchState }: StateContext<QrjPublicationsStateModel>,
    { payload: { qrjPublicationCreateInput } }: AddQrjPublication
  ): Observable<CreateQrjPublicationMutation> {
    const { qrjPublications, countQrjPublications } = getState()
    return this.qrjPublicationsService.create(qrjPublicationCreateInput).pipe(
      first(),
      tap(({ createQrjPublication }: CreateQrjPublicationMutation) => {
        patchState({
          qrjPublications: [
            createQrjPublication,
            ...qrjPublications.slice(0, -1),
          ],
          countQrjPublications: countQrjPublications + 1,
        })
      })
    )
  }

  @Action(UpdateQrjPublication)
  updatePublication(
    { setState }: StateContext<QrjPublicationsStateModel>,
    { payload: { qrjPublicationUpdateInput } }: UpdateQrjPublication
  ): Observable<UpdateQrjPublicationMutation> {
    return this.qrjPublicationsService.update(qrjPublicationUpdateInput).pipe(
      first(),
      tap(({ updateQrjPublication }: UpdateQrjPublicationMutation) => {
        console.log(updateQrjPublication)
        setState(
          patch({
            qrjPublications: updateItem<QrjPublication>(
              (qrjPublication: QrjPublication) =>
                qrjPublication.id === updateQrjPublication.id,
              patch(updateQrjPublication)
            ),
          })
        )
      })
    )
  }

  @Action(DeleteQrjPublication)
  deletePublication(
    { getState, patchState }: StateContext<QrjPublicationsStateModel>,
    { payload: { id } }: DeleteQrjPublication
  ): Observable<DeleteQrjPublicationMutation> {
    const { qrjPublications, countQrjPublications } = getState()
    return this.qrjPublicationsService.delete(id).pipe(
      first(),
      tap(() => {
        patchState({
          qrjPublications: qrjPublications.filter(
            (qrjPublication) => qrjPublication.id !== id
          ),
          countQrjPublications: countQrjPublications - 1,
        })
      })
    )
  }
}
