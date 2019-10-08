import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TechnologyTransferCentersRoutingModule} from './technology-transfer-centers-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {FormsModule} from '@angular/forms';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import { MainComponent } from './pages/main/main.component';
import { TechnologyTransferNetworksComponent } from './pages/technology-transfer-networks/technology-transfer-networks.component';
import { TechnologyTransferAndInnovationOrganizationsComponent } from './pages/technology-transfer-and-innovation-organizations/technology-transfer-and-innovation-organizations.component';


@NgModule({
  declarations: [IndexComponent, MainComponent, TechnologyTransferNetworksComponent, TechnologyTransferAndInnovationOrganizationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageTitleBarModule,
    DialogModule,
    FormsModule,
    CrudBasicModule,
    TechnologyTransferCentersRoutingModule
  ]
})
export class TechnologyTransferCentersModule {
}
