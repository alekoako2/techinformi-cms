import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngxs/store';
import {DeleteOecd} from '../../../oecd/state/oecd.actions';
import {DeleteQrjJournal} from '../../state/qrj-journal.actions';

@Component({
  selector: 'app-qrj-journal-delete-dialog',
  templateUrl: './qrj-journal-delete-dialog.component.html',
  styleUrls: ['./qrj-journal-delete-dialog.component.scss']
})
export class QrjJournalDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<QrjJournalDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteOecd() {
    this.store.dispatch(new DeleteQrjJournal({id: this.id}));
    this.dialogRef.close();
  }
}
