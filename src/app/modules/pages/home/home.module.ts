import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexComponent} from './pages/index/index.component';

import {HomeRoutingModule} from './home-routing.module';
import {FlexModule} from '@angular/flex-layout';
import {SnackbarDirective} from '../../../shared/directives/snackbar.directive';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';
import {NewsComponent} from './pages/news/news.component';

@NgModule({
  declarations: [
    IndexComponent,
    SnackbarDirective,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FlexModule,
    SanitizeHtmlModule
  ],
  providers: [
  ]
})
export class HomeModule {
}
