import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PartnershipComponent} from './pages/partnership/partnership.component';

const routes: Routes = [{
  path: '', component: PartnershipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipRoutingModule {
}
