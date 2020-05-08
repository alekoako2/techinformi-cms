import {Component, Inject, OnInit} from '@angular/core';
import {
  OecdQuery_oecd,
  OecdQuery_oecd_translation,
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CreateOecd, UpdateOecd} from '../../state/oecd.actions';

@Component({
  selector: 'app-oecd-update-create-dialog',
  templateUrl: './oecd-update-create-dialog.component.html',
  styleUrls: ['./oecd-update-create-dialog.component.scss']
})
export class OecdUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  oecdData: OecdQuery_oecd;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<OecdUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.oecdData = <OecdQuery_oecd> {};
    this.oecdData.translation = <OecdQuery_oecd_translation[]> {};
    this.oecdData.translation[0] = <OecdQuery_oecd_translation> {};
    this.oecdData.translation[1] = <OecdQuery_oecd_translation> {};

    if (data) {
      this.showCreate = false;
      this.oecdData = data.oecd.oecd;
    }
  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new CreateOecd(this.oecdData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateOecd(this.oecdData));
    this.dialogRef.close();
  }
}
