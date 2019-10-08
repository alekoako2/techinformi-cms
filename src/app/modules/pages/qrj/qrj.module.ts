import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QrjRoutingModule} from './qrj-routing.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {NgxsModule} from '@ngxs/store';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {IndexComponent} from './pages/index/index.component';
import {QrjDeleteDialogComponent} from './components/qrj-delete-dialog/qrj-delete-dialog.component';
import {QrjUpdateCreateDialogComponent} from './components/qrj-update-create-dialog/qrj-update-create-dialog.component';
import {QrjState} from './state/qrj.state';


@NgModule({
  declarations: [IndexComponent, QrjDeleteDialogComponent, QrjUpdateCreateDialogComponent],
  imports: [
    CommonModule,
    QrjRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      QrjState
    ]),
    CrudBasicModule,
    DialogModule,
  ],
  entryComponents: [
    QrjUpdateCreateDialogComponent,
    QrjDeleteDialogComponent
  ]
})
export class QrjModule {
}
