import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexComponent} from './pages/index/index.component';

import {HomeRoutingModule} from './home-routing.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FlexModule} from '@angular/flex-layout';
import {SlickCarouselComponent} from './components/slick-carousel/slick-carousel.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {DealsComponent} from './components/deals/deals.component';
import {TopProductsComponent} from './components/top-products/top-products.component';
import {SubscribeNewsletterComponent} from './components/subscribe-newsletter/subscribe-newsletter.component';
import {SnackbarDirective} from '../../../shared/directives/snackbar.directive';
import {NewsComponent} from './components/news/news.component';
import {VerticalNavListComponent} from './components/vertical-nav-list/vertical-nav-list.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';

@NgModule({
  declarations: [
    IndexComponent,
    SlickCarouselComponent,
    CategoriesComponent,
    DealsComponent,
    TopProductsComponent,
    SubscribeNewsletterComponent,
    SnackbarDirective,
    NewsComponent,
    VerticalNavListComponent,
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
