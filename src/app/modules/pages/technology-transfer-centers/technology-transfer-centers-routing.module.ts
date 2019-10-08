import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {MainComponent} from './pages/main/main.component';
import {TechnologyTransferNetworkComponent} from './pages/technology-transfer-network/technology-transfer-network.component';


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
