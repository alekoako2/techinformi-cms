import { Action, State, StateContext, Store } from '@ngxs/store'
import {
  AddQrjPublication,
  DeleteQrjPublication,
  GetQrjPublication,
  LoadQrjPublications,
  UpdateQrjPublication,
} from './qrj-publications-crud.actions'
import { QrjPublicationService } from '@http/qrj-publication-service'
import {
  LanguageCode,
  QrjPublication,
  QrjPublicationQuery,
  QrjPublicationsQuery,
} from '@graphql'
import { Injectable } from '@angular/core'

export class QrjPublicationsStateModel {
  public qrjPublications: QrjPublication[]
  public countQrjPublications: number
  public qrjPublication: QrjPublication
}

@State<QrjPublicationsStateModel>({
  name: 'qrjPublications',
  defaults: {
    qrjPublications: [],
    countQrjPublications: 0,
    qrjPublication: {},
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
  ) {
    this.qrjPublicationsService
      .loadQrjPublications(
        {
          index: searchText,
        },
        pageIndex,
        pageSize
      )
      .subscribe(
        ({ qrjPublications, countQrjPublications }: QrjPublicationsQuery) => {
          patchState({ qrjPublications, countQrjPublications })
        }
      )
  }

  @Action(GetQrjPublication)
  getPublication(
    { patchState }: StateContext<QrjPublicationsStateModel>,
    { payload: { id } }: GetQrjPublication
  ) {
    this.qrjPublicationsService
      .loadQrjPublication(id)
      .subscribe((qrjPublication: QrjPublication) =>
        patchState({ qrjPublication })
      )
  }

  @Action(DeleteQrjPublication)
  deletePublication(
    ctx: StateContext<QrjPublicationsStateModel>,
    action: DeleteQrjPublication
  ) {
    return null
    // return this.qrjPublicationsService
    //   .deleteQrjPublication(action.payload.id)
    //   .pipe(
    //     first(),
    //     tap((res) => {
    //       ctx.setState(
    //         patch({
    //           qrjPublications: removeItem<QrjPublicationsQuery_qrjPublications>(
    //             (publication) => publication.id === action.payload.id
    //           ),
    //         })
    //       )
    //     })
    //   )
  }

  @Action(AddQrjPublication)
  addPublication(
    ctx: StateContext<QrjPublicationsStateModel>,
    action: AddQrjPublication
  ) {
    return null
    // return this.qrjPublicationsService
    //   .createQrjPublication(action.payload)
    //   .pipe(
    //     first(),
    //     tap((res) => {
    //       ctx.getState().qrjPublications.pop()
    //       ctx.patchState({
    //         qrjPublications: [
    //           res.createQrjPublication,
    //           ...ctx.getState().qrjPublications,
    //         ],
    //       })
    //     })
    //   )
  }

  @Action(UpdateQrjPublication)
  updatePublication(
    ctx: StateContext<QrjPublicationsStateModel>,
    action: UpdateQrjPublication
  ) {
    return null
    // return this.qrjPublicationsService
    //   .updateQrjPublication(action.payload)
    //   .pipe(
    //     first(),
    //     tap((res) => {
    //       ctx.setState(
    //         patch({
    //           qrjPublications: updateItem<QrjPublicationsQuery_qrjPublications>(
    //             (publication) => publication.id === action.payload.id,
    //             patch(action.payload)
    //           ),
    //         })
    //       )
    //     })
    //   )
  }
}
