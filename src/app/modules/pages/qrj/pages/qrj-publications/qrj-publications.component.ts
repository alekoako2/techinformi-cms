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

  QrjPublicationDialogComponent = QrjPublicationDialogComponent;
  DeleteQrjPublicationDialogComponent = DeleteQrjPublicationDialogComponent;
  CountQrjPublications = CountQrjPublications;
  LoadQrjPublications = LoadQrjPublications;

  title = 'al';

  constructor(private store: Store, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

}
