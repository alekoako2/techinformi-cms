import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {AddressComponent} from './pages/address/address.component';
import {OrderHistoryComponent} from './pages/order-history/order-history.component';
import {IndexComponent} from './pages/index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'address', component: AddressComponent},
      {path: 'order-history', component: OrderHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
