import {Component, Inject, OnInit} from '@angular/core';
import {TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  CreateTechnologyTransferAndInnovationOrganization,
  UpdateTechnologyTransferAndInnovationOrganization
} from '../../pages/technology-transfer-and-innovation-organization/state/technology-transfer-and-innovation-organization.actions';

@Component({
  selector: 'app-technology-transfer-and-innovation-organization-update-create-dialog',
  templateUrl: './technology-transfer-and-innovation-organization-update-create-dialog.component.html',
  styleUrls: ['./technology-transfer-and-innovation-organization-update-create-dialog.component.scss']
})
export class TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  technologyTransferAndInnovationOrganizationData: TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.technologyTransferAndInnovationOrganizationData = <TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization> {};

    if (data) {
      this.showCreate = false;
      this.technologyTransferAndInnovationOrganizationData = data.technologyTransferAndInnovationOrganization.technologyTransferAndInnovationOrganization;
    }
  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new CreateTechnologyTransferAndInnovationOrganization(this.technologyTransferAndInnovationOrganizationData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateTechnologyTransferAndInnovationOrganization(this.technologyTransferAndInnovationOrganizationData));
    this.dialogRef.close();
  }

}
