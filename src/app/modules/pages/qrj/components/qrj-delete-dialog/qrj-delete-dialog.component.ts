import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {DeleteQrj} from '../../state/qrj.actions';

@Component({
  selector: 'app-qrj-delete-dialog',
  templateUrl: './qrj-delete-dialog.component.html',
  styleUrls: ['./qrj-delete-dialog.component.scss']
})
export class QrjDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<QrjDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteQrj() {
    this.store.dispatch(new DeleteQrj({id: this.id}));
    this.dialogRef.close();
  }

}
