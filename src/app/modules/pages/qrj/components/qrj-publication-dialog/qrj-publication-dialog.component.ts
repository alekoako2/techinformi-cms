import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {
  QrjPublicationQuery_qrjPublication,
  QrjPublicationQuery_qrjPublication_journal,
  QrjPublicationQuery_qrjPublication_oecd,
  QrjPublicationQuery_qrjPublication_translation
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import {AddQrjPublication, UpdateQrjPublication} from '../../pages/qrj-publications/state/qrj-publications.actions';

@Component({
  selector: 'app-qrj-publication-dialog',
  templateUrl: './qrj-publication-dialog.component.html',
  styleUrls: ['./qrj-publication-dialog.component.scss']
})

export class QrjPublicationDialogComponent implements OnInit {

  showCreate: boolean = true;
  publicationData: QrjPublicationQuery_qrjPublication;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<QrjPublicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.publicationData = <QrjPublicationQuery_qrjPublication> {};
    this.publicationData.journal = <QrjPublicationQuery_qrjPublication_journal> {};
    this.publicationData.oecd = <QrjPublicationQuery_qrjPublication_oecd> {};
    this.publicationData.translation = <QrjPublicationQuery_qrjPublication_translation[]> {};
    this.publicationData.translation[0] = <QrjPublicationQuery_qrjPublication_translation> {};
    this.publicationData.translation[1] = <QrjPublicationQuery_qrjPublication_translation> {};

    if (data) {
      this.showCreate = false;
      this.publicationData = data.qrjPublications.qrjPublication;
    }
  }

  ngOnInit() {
  }


  arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }

  create() {
    this.store.dispatch(new AddQrjPublication(this.publicationData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateQrjPublication(this.publicationData));
    this.dialogRef.close();
  }

}
