import {Component, Inject, OnInit} from '@angular/core';
import {DeleteQrjPublication} from '../../../qrj/pages/qrj-publications/state/qrj-publications.actions';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngxs/store';
import {DeleteQrjPublicationDialogComponent} from '../../../qrj/components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component';
import {DeleteOecd} from '../../state/oecd.actions';

@Component({
  selector: 'app-oecd-delete-dialog',
  templateUrl: './oecd-delete-dialog.component.html',
  styleUrls: ['./oecd-delete-dialog.component.scss']
})
export class OecdDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<DeleteQrjPublicationDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteOecd() {
    this.store.dispatch(new DeleteOecd({id: this.id}));
    this.dialogRef.close();
  }
}
