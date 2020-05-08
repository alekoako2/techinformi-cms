import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {DeleteQrj} from '../../../qrj/state/qrj.actions';
import {DeleteTechnologyTransferNetwork} from '../../pages/technology-transfer-network/state/technology-transfer-network.actions';

@Component({
  selector: 'app-technology-transfer-network-delete-dialog',
  templateUrl: './technology-transfer-network-delete-dialog.component.html',
  styleUrls: ['./technology-transfer-network-delete-dialog.component.scss']
})
export class TechnologyTransferNetworkDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<TechnologyTransferNetworkDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteTechnologyTransferNetwork() {
    this.store.dispatch(new DeleteTechnologyTransferNetwork({id: this.id}));
    this.dialogRef.close();
  }
}
