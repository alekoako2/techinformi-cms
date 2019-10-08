import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {QrjQuery_qrj, QrjsQuery_qrjs} from '../../../../../types/operation-result-types';
import {QrjUpdateCreateDialogComponent} from '../../components/qrj-update-create-dialog/qrj-update-create-dialog.component';
import {QrjDeleteDialogComponent} from '../../components/qrj-delete-dialog/qrj-delete-dialog.component';
import {CountQrjs, GetQrj, LoadQrjs} from '../../state/qrj.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.qrj.qrjs) qrjs$: Observable<QrjsQuery_qrjs[]>;
  @Select(state => state.qrj.count) countQrjs$: Observable<number>;
  @Select(state => state.qrj.qrj) qrj$: Observable<QrjQuery_qrj>;

  QrjUpdateCreateDialogComponent = QrjUpdateCreateDialogComponent;
  QrjDeleteDialogComponent = QrjDeleteDialogComponent;

  CountQrjs = CountQrjs;
  GetQrj = GetQrj;
  LoadQrjs = LoadQrjs;

  constructor() {
  }

  ngOnInit() {
  }

}
