import {Component, Inject, OnInit} from '@angular/core';
import {
  TechnologyTransferNetworkQuery_technologyTransferNetwork
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {
  CreateTechnologyTransferNetwork,
  UpdateTechnologyTransferNetwork
} from '../../pages/technology-transfer-network/state/technology-transfer-network.actions';

@Component({
  selector: 'app-technology-transfer-network-update-create-dialog',
  templateUrl: './technology-transfer-network-update-create-dialog.component.html',
  styleUrls: ['./technology-transfer-network-update-create-dialog.component.scss']
})
export class TechnologyTransferNetworkUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  technologyTransferNetworkData: TechnologyTransferNetworkQuery_technologyTransferNetwork;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<TechnologyTransferNetworkUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.technologyTransferNetworkData = <TechnologyTransferNetworkQuery_technologyTransferNetwork> {};

    if (data) {
      this.showCreate = false;
      this.technologyTransferNetworkData = data.technologyTransferNetwork.technologyTransferNetwork;
    }
  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new CreateTechnologyTransferNetwork(this.technologyTransferNetworkData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateTechnologyTransferNetwork(this.technologyTransferNetworkData));
    this.dialogRef.close();
  }

}
