import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TechnologyTransferNetworkUpdateCreateDialogComponent} from '../../components/technology-transfer-network-update-create-dialog/technology-transfer-network-update-create-dialog.component';
import {TechnologyTransferNetworkDeleteDialogComponent} from '../../components/technology-transfer-network-delete-dialog/technology-transfer-network-delete-dialog.component';
import {
  CountTechnologyTransferNetworks,
  GetTechnologyTransferNetwork,
  LoadTechnologyTransferNetworks
} from './state/technology-transfer-network.actions';
import {
  TechnologyTransferNetworkQuery_technologyTransferNetwork,
  TechnologyTransferNetworksQuery_technologyTransferNetworks
} from '../../../../../types/operation-result-types';

@Component({
  selector: 'app-technology-transfer-networks',
  templateUrl: './technology-transfer-network.component.html',
  styleUrls: ['./technology-transfer-network.component.scss']
})
export class TechnologyTransferNetworkComponent implements OnInit {
  @Select(state => state.technologyTransferNetwork.technologyTransferNetworks) technologyTransferNetworks$: Observable<TechnologyTransferNetworksQuery_technologyTransferNetworks[]>;
  @Select(state => state.technologyTransferNetwork.count) countTechnologyTransferNetworks$: Observable<number>;
  @Select(state => state.technologyTransferNetwork.technologyTransferNetwork) technologyTransferNetwork$: Observable<TechnologyTransferNetworkQuery_technologyTransferNetwork>;

  TechnologyTransferNetworkUpdateCreateDialogComponent = TechnologyTransferNetworkUpdateCreateDialogComponent;
  TechnologyTransferNetworkDeleteDialogComponent = TechnologyTransferNetworkDeleteDialogComponent;

  CountTechnologyTransferNetworks = CountTechnologyTransferNetworks;
  GetTechnologyTransferNetwork = GetTechnologyTransferNetwork;
  LoadTechnologyTransferNetworks = LoadTechnologyTransferNetworks;

  constructor() {
  }

  ngOnInit() {
  }

}
