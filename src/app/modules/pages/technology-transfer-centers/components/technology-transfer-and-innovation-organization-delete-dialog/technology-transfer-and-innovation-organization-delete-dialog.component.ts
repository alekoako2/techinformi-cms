import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngxs/store';
import {DeleteTechnologyTransferAndInnovationOrganization} from '../../pages/technology-transfer-and-innovation-organization/state/technology-transfer-and-innovation-organization.actions';

@Component({
  selector: 'app-technology-transfer-and-innovation-organization-delete-dialog',
  templateUrl: './technology-transfer-and-innovation-organization-delete-dialog.component.html',
  styleUrls: ['./technology-transfer-and-innovation-organization-delete-dialog.component.scss']
})
export class TechnologyTransferAndInnovationOrganizationDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<TechnologyTransferAndInnovationOrganizationDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteTechnologyTransferAndInnovationOrganization() {
    this.store.dispatch(new DeleteTechnologyTransferAndInnovationOrganization({id: this.id}));
    this.dialogRef.close();
  }

}
