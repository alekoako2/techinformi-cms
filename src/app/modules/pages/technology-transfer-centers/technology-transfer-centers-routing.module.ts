import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {MainComponent} from './pages/main/main.component';
import {TechnologyTransferNetworksComponent} from './pages/technology-transfer-networks/technology-transfer-networks.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'technology_transfer_networks',
        component: TechnologyTransferNetworksComponent
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
