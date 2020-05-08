import {Component, Inject, OnInit} from '@angular/core';
import {QrjQuery_qrj, QrjQuery_qrj_journal, QrjQuery_qrj_journal_translation} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CreateQrj, UpdateQrj} from '../../state/qrj.actions';

@Component({
  selector: 'app-qrj-update-create-dialog',
  templateUrl: './qrj-update-create-dialog.component.html',
  styleUrls: ['./qrj-update-create-dialog.component.scss']
})
export class QrjUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  qrjData: QrjQuery_qrj;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<QrjUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.qrjData = <QrjQuery_qrj> {};
    this.qrjData.journal = <QrjQuery_qrj_journal[]> {};
    this.qrjData.journal[0] = <QrjQuery_qrj_journal> {};
    this.qrjData.journal[0].translation = <QrjQuery_qrj_journal_translation[]> {};
    this.qrjData.journal[0].translation[0] = <QrjQuery_qrj_journal_translation> {};
    this.qrjData.journal[0].translation[1] = <QrjQuery_qrj_journal_translation> {};
    this.qrjData.journal[1] = <QrjQuery_qrj_journal> {};
    this.qrjData.journal[1].translation = <QrjQuery_qrj_journal_translation[]> {};
    this.qrjData.journal[1].translation[0] = <QrjQuery_qrj_journal_translation> {};
    this.qrjData.journal[1].translation[1] = <QrjQuery_qrj_journal_translation> {};

    if (data) {
      this.showCreate = false;
      this.qrjData = data.qrj.qrj;
    }
  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new CreateQrj(this.qrjData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateQrj(this.qrjData));
    this.dialogRef.close();
  }

}
