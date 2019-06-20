import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {ServicesComponent} from './pages/services/services.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule,
    PageTitleBarModule,
    SanitizeHtmlModule
  ]
})
export class ServicesModule {
}
