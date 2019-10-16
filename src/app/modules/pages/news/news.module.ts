import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsRoutingModule} from './news-routing.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {NgxsModule} from '@ngxs/store';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {NewsDeleteDialogComponent} from './components/news-delete-dialog/news-delete-dialog.component';
import {NewsUpdateCreateDialogComponent} from './components/news-update-create-dialog/news-update-create-dialog.component';
import {IndexComponent} from './pages/index/index.component';
import {NewsState} from './state/news.state';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [NewsDeleteDialogComponent, NewsUpdateCreateDialogComponent, IndexComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      NewsState
    ]),
    CrudBasicModule,
    DialogModule,
    QuillModule.forRoot()
  ],
  entryComponents: [
    NewsDeleteDialogComponent,
    NewsUpdateCreateDialogComponent
  ]
})
export class NewsModule {
}
