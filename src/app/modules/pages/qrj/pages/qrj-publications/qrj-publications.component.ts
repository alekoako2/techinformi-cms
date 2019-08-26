import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {QrjPublicationDialogComponent} from '../../components/qrj-publication-dialog/qrj-publication-dialog.component';
import {
  QrjPublicationQuery_qrjPublication,
  QrjPublicationsQuery_qrjPublications
} from '../../../../../types/operation-result-types';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CountQrjPublications, DeleteQrjPublication, GetQrjPublication, LoadQrjPublications} from './state/qrj-publications.actions';
import {DeleteQrjPublicationDialogComponent} from '../../components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component';


@Component({
  selector: 'app-publications',
  templateUrl: './qrj-publications.component.html',
  styleUrls: ['./qrj-publications.component.scss']
})

export class QrjPublicationsComponent implements OnInit {
  @Select(state => state.qrjPublications.qrjPublications) qrjPublications$: Observable<QrjPublicationsQuery_qrjPublications[]>;
  @Select(state => state.qrjPublications.count) countQrjPublications$: Observable<number>;
  @Select(state => state.qrjPublications.qrjPublication) qrjPublication$: Observable<QrjPublicationsQuery_qrjPublications>;
  pageSize = 12;
  pageIndex = 0;
  searchText;

  title = 'al';

  constructor(private store: Store, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.store.dispatch(new CountQrjPublications());
    this.store.dispatch(new LoadQrjPublications({searchText: null, index: 0, limit: 12}));
  }

  pageChanged(event) {

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.store.dispatch(new LoadQrjPublications({searchText: null, index: event.pageIndex, limit: event.pageSize}));

  }

  searchQrjPublication() {
    this.store.dispatch(new LoadQrjPublications({searchText: this.searchText, index: this.pageIndex, limit: this.pageSize}));
  }

  openDialog(dialogComponent: any, data?: QrjPublicationQuery_qrjPublication, width = '900px',): void {
    this.dialog.open(dialogComponent,
      {
        width,
        data: data ? data : null
      }
    );
  }

  createQrjPublication() {
    this.openDialog(QrjPublicationDialogComponent);
  }

  deleteQrjPublication(id) {
    this.openDialog(DeleteQrjPublicationDialogComponent, id, '450px');
  }

  updateQrjPublication(pub) {
    this.store.dispatch(new GetQrjPublication({id: pub})).subscribe((res) => {
      this.openDialog(QrjPublicationDialogComponent, res.qrjPublications.qrjPublication);
    });
  }

}
