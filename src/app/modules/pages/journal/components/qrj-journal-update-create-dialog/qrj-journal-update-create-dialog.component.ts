import {Component, Inject, OnInit} from '@angular/core';
import {
  OecdQuery_oecd,
  OecdQuery_oecd_translation,
  QrjJournalQuery_qrjJournal,
  QrjJournalQuery_qrjJournal_translation
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CreateOecd, UpdateOecd} from '../../../oecd/state/oecd.actions';
import {CreateQrjJournal, UpdateQrjJournal} from '../../state/qrj-journal.actions';

@Component({
  selector: 'app-qrj-journal-update-create-dialog',
  templateUrl: './qrj-journal-update-create-dialog.component.html',
  styleUrls: ['./qrj-journal-update-create-dialog.component.scss']
})
export class QrjJournalUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  qrjJournalData: QrjJournalQuery_qrjJournal;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<QrjJournalUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    this.qrjJournalData = <QrjJournalQuery_qrjJournal> {};
    this.qrjJournalData.translation = <QrjJournalQuery_qrjJournal_translation[]> {};
    this.qrjJournalData.translation[0] = <QrjJournalQuery_qrjJournal_translation> {};
    this.qrjJournalData.translation[1] = <QrjJournalQuery_qrjJournal_translation> {};

    if (data) {
      this.showCreate = false;
      this.qrjJournalData = data.qrjJournal.qrjJournal;
    }

  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new CreateQrjJournal(this.qrjJournalData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateQrjJournal(this.qrjJournalData));
    this.dialogRef.close();
  }
}
