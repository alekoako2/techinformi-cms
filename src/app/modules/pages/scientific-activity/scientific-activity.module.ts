import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScientificActivityRoutingModule} from './scientific-activity-routing.module';
import {ScientificDirectionsComponent} from './pages/scientific-directions/scientific-directions.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';

@NgModule({
  declarations: [
    ScientificDirectionsComponent,
    ProjectsComponent,
    PublicationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScientificActivityRoutingModule,
    SlickCarouselModule,
    PageTitleBarModule,
    SanitizeHtmlModule
  ]
})
export class ScientificActivityModule {
}
