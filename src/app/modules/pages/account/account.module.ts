import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AddressComponent} from './pages/address/address.component';
import {OrderHistoryComponent} from './pages/order-history/order-history.component';
import {LeftNavComponent} from './components/left-nav/left-nav.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [IndexComponent, ProfileComponent, AddressComponent, OrderHistoryComponent, LeftNavComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
