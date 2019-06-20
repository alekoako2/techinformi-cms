import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicationsRoutingModule} from './publications-routing.module';
import {PublicationsComponent} from './pages/publications/publications.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../../shared/modules/material/material.module';
import {LayoutContainerModule} from '../../../shared/modules/layout-container/layout-container.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [PublicationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicationsRoutingModule,
    PageTitleBarModule,
  ]
})
export class PublicationsModule {
}
