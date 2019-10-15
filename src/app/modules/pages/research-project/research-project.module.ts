import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResearchProjectRoutingModule} from './research-project-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {ResearchProjectDeleteDialogComponent} from './components/research-project-delete-dialog/research-project-delete-dialog.component';
import {ResearchProjectUpdateCreateDialogComponent} from './components/research-project-update-create-dialog/research-project-update-create-dialog.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {NgxsModule} from '@ngxs/store';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {ResearchProjectState} from './state/research-project.state';


@NgModule({
  declarations: [IndexComponent, ResearchProjectDeleteDialogComponent, ResearchProjectUpdateCreateDialogComponent],
  imports: [
    CommonModule,
    ResearchProjectRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      ResearchProjectState
    ]),
    CrudBasicModule,
    DialogModule,
  ],
  entryComponents: [
    ResearchProjectDeleteDialogComponent,
    ResearchProjectUpdateCreateDialogComponent
  ]
})
export class ResearchProjectModule {
}
