import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OecdRoutingModule} from './oecd-routing.module';
import {OecdAutoCompleteInputComponent} from './components/oecd-auto-complete-input/oecd-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './pages/index/index.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {OecdUpdateCreateDialogComponent} from './components/oecd-update-create-dialog/oecd-update-create-dialog.component';
import {OecdDeleteDialogComponent} from './components/oecd-delete-dialog/oecd-delete-dialog.component';
import {NgxsModule} from '@ngxs/store';
import {OecdState} from './state/oecd.state';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';

@NgModule({
  declarations: [OecdAutoCompleteInputComponent, IndexComponent, OecdUpdateCreateDialogComponent, OecdDeleteDialogComponent],
  imports: [
    CommonModule,
    OecdRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      OecdState
    ]),
    CrudBasicModule,
    DialogModule
  ],
  entryComponents: [
    OecdUpdateCreateDialogComponent,
    OecdDeleteDialogComponent
  ]
})
export class OecdModule {
}
