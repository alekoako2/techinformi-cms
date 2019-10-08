import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent} from '../../components/technology-transfer-and-innovation-organization-update-create-dialog/technology-transfer-and-innovation-organization-update-create-dialog.component';
import {TechnologyTransferAndInnovationOrganizationDeleteDialogComponent} from '../../components/technology-transfer-and-innovation-organization-delete-dialog/technology-transfer-and-innovation-organization-delete-dialog.component';
import {
  CountTechnologyTransferAndInnovationOrganizations,
  GetTechnologyTransferAndInnovationOrganization,
  LoadTechnologyTransferAndInnovationOrganizations
} from './state/technology-transfer-and-innovation-organization.actions';
import {
  TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization,
  TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations
} from '../../../../../types/operation-result-types';


@Component({
  selector: 'app-technology-transfer-and-innovation-organization',
  templateUrl: './technology-transfer-and-innovation-organization.component.html',
  styleUrls: ['./technology-transfer-and-innovation-organization.component.scss']
})
export class TechnologyTransferAndInnovationOrganizationComponent implements OnInit {
  @Select(state => state.technologyTransferAndInnovationOrganization.technologyTransferAndInnovationOrganizations) technologyTransferAndInnovationOrganizations$: Observable<TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations[]>;
  @Select(state => state.technologyTransferAndInnovationOrganization.count) countTechnologyTransferAndInnovationOrganizations$: Observable<number>;
  @Select(state => state.technologyTransferAndInnovationOrganization.technologyTransferAndInnovationOrganization) technologyTransferAndInnovationOrganization$: Observable<TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization>;

  TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent = TechnologyTransferAndInnovationOrganizationUpdateCreateDialogComponent;
  TechnologyTransferAndInnovationOrganizationDeleteDialogComponent = TechnologyTransferAndInnovationOrganizationDeleteDialogComponent;

  CountTechnologyTransferAndInnovationOrganizations = CountTechnologyTransferAndInnovationOrganizations;
  GetTechnologyTransferAndInnovationOrganization = GetTechnologyTransferAndInnovationOrganization;
  LoadTechnologyTransferAndInnovationOrganizations = LoadTechnologyTransferAndInnovationOrganizations;

  constructor() {
  }

  ngOnInit() {
  }

}
