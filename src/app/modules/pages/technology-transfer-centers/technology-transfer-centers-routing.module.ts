import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {MainComponent} from './pages/main/main.component';
import {TechnologyTransferNetworkComponent} from './pages/technology-transfer-network/technology-transfer-network.component';
import {TechnologyTransferAndInnovationOrganizationComponent} from './pages/technology-transfer-and-innovation-organization/technology-transfer-and-innovation-organization.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'technology_transfer_networks',
        component: TechnologyTransferNetworkComponent
      },
      {
        path: 'technology_transfer_and_innovation_organizations',
        component: TechnologyTransferAndInnovationOrganizationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyTransferCentersRoutingModule {
}
