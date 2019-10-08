import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TechnologyTransferCentersRoutingModule} from './technology-transfer-centers-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {FormsModule} from '@angular/forms';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {MainComponent} from './pages/main/main.component';
import {TechnologyTransferNetworkComponent} from './pages/technology-transfer-network/technology-transfer-network.component';
import {TechnologyTransferAndInnovationOrganizationsComponent} from './pages/technology-transfer-and-innovation-organization/technology-transfer-and-innovation-organizations.component';
import {TechnologyTransferNetworkDeleteDialogComponent} from './components/technology-transfer-network-delete-dialog/technology-transfer-network-delete-dialog.component';
import {TechnologyTransferNetworkUpdateCreateDialogComponent} from './components/technology-transfer-network-update-create-dialog/technology-transfer-network-update-create-dialog.component';
import {NgxsModule} from '@ngxs/store';
import {QrjState} from '../qrj/state/qrj.state';
import {TechnologyTransferNetworkState} from './pages/technology-transfer-network/state/technology-transfer-network.state';


@NgModule({
  declarations: [IndexComponent, MainComponent, TechnologyTransferNetworkComponent, TechnologyTransferAndInnovationOrganizationsComponent, TechnologyTransferNetworkDeleteDialogComponent, TechnologyTransferNetworkUpdateCreateDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageTitleBarModule,
    DialogModule,
    FormsModule,
    CrudBasicModule,
    TechnologyTransferCentersRoutingModule,
    NgxsModule.forFeature([
      TechnologyTransferNetworkState
    ]),
  ],
  entryComponents: [
    TechnologyTransferNetworkDeleteDialogComponent,
    TechnologyTransferNetworkUpdateCreateDialogComponent
  ]
})
export class TechnologyTransferCentersModule {
}
