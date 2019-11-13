import {State, Action, StateContext, Store, Selector} from '@ngxs/store';
import {
  AddQrjPublication,
  CountQrjPublications,
  DeleteQrjPublication,
  GetQrjPublication,
  LoadQrjPublications, UpdateQrjPublication
} from './qrj-publications.actions';
import {QrjPublicationService} from '../../../services/qrj-publications.service';
import {first, single, take, tap} from 'rxjs/operators';
import {QrjPublicationQuery, QrjPublicationsQuery_qrjPublications} from '../../../../../../types/operation-result-types';
import {append, patch, removeItem, updateItem} from '@ngxs/store/operators';

export class QrjPublicationsStateModel {
  public qrjPublications: QrjPublicationsQuery_qrjPublications[];
  public count: number;
  public qrjPublication: QrjPublicationsQuery_qrjPublications;

}

@State<QrjPublicationsStateModel>({
  name: 'qrjPublications',
})


export class QrjPublicationsState {
  constructor(private store: Store, private qrjPublicationsService: QrjPublicationService) {
  }

  @Action(CountQrjPublications)
  countAll({patchState}: StateContext<QrjPublicationsStateModel>) {

    return this.qrjPublicationsService.publicationsCount().pipe(take(1), tap(res => {

      patchState({count: res.countQrjPublications});

    }));
  }

  @Action(LoadQrjPublications)
  loadPublications({patchState}: StateContext<QrjPublicationsStateModel>, action: LoadQrjPublications) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;


    console.log(searchText);

    return this.qrjPublicationsService.loadQrjPublications({
      query: {index: searchText, title: '', oecd: '', author: '', qrjJournal: ''},
      index,
      limit
    }).pipe(take(1), tap(res => {


      patchState({qrjPublications: res.qrjPublications});

    }));
  }

  @Action(GetQrjPublication)
  getPublication({patchState}: StateContext<QrjPublicationsStateModel>, action: GetQrjPublication) {
    return this.qrjPublicationsService.getPublication(action.payload.id).pipe(first(), tap(res => {
      patchState({qrjPublication: res.qrjPublication});
    }));
  }

  @Action(DeleteQrjPublication)
  deletePublication(ctx: StateContext<QrjPublicationsStateModel>, action: DeleteQrjPublication) {
    return this.qrjPublicationsService.deleteQrjPublication(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjPublications: removeItem<QrjPublicationsQuery_qrjPublications>(publication => publication.id === action.payload.id)
        })
      );
    }));
  }

  @Action(AddQrjPublication)
  addPublication(ctx: StateContext<QrjPublicationsStateModel>, action: AddQrjPublication) {
    return this.qrjPublicationsService.createQrjPublication(action.payload).pipe(first(), tap(res => {
      ctx.getState().qrjPublications.pop();
      ctx.patchState({
        qrjPublications: [
          res.createQrjPublication,
          ...ctx.getState().qrjPublications
        ]
      });
    }));
  }

  @Action(UpdateQrjPublication)
  updatePublication(ctx: StateContext<QrjPublicationsStateModel>, action: UpdateQrjPublication) {
    return this.qrjPublicationsService.updateQrjPublication(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          qrjPublications: updateItem<QrjPublicationsQuery_qrjPublications>(publication => publication.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }
}
