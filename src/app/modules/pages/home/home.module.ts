import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexComponent} from './pages/index/index.component';

import {HomeRoutingModule} from './home-routing.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FlexModule} from '@angular/flex-layout';
import {SnackbarDirective} from '../../../shared/directives/snackbar.directive';
import {AngularFirestore} from '@angular/fire/firestore';
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
    SlickCarouselModule,
    SharedModule,
    FlexModule,
    SanitizeHtmlModule
  ],
  providers: [
    AngularFirestore
  ]
})
export class HomeModule {
}
