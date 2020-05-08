import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {DeleteExpert} from '../../state/expert.actions';

@Component({
  selector: 'app-expert-delete-dialog',
  templateUrl: './expert-delete-dialog.component.html',
  styleUrls: ['./expert-delete-dialog.component.scss']
})
export class ExpertDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<ExpertDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteExpert() {
    this.store.dispatch(new DeleteExpert({id: this.id}));
    this.dialogRef.close();
  }

}
