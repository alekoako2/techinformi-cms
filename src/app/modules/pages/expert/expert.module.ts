import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpertRoutingModule} from './expert-routing.module';
import {ExpertUpdateCreateDialogComponent} from './components/expert-update-create-dialog/expert-update-create-dialog.component';
import {ExpertDeleteDialogComponent} from './components/expert-delete-dialog/expert-delete-dialog.component';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {NgxsModule} from '@ngxs/store';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {ExpertState} from './state/expert.state';


@NgModule({
  declarations: [ExpertUpdateCreateDialogComponent, ExpertDeleteDialogComponent, IndexComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      ExpertState
    ]),
    CrudBasicModule,
    DialogModule,
  ],
  entryComponents: [
    ExpertUpdateCreateDialogComponent,
    ExpertDeleteDialogComponent
  ]
})
export class ExpertModule {
}
