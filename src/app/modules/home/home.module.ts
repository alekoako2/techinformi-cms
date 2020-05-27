import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IndexComponent } from './pages/index/index.component'

import { HomeRoutingModule } from './home-routing.module'
import { FlexModule } from '@angular/flex-layout'
import { NewsComponent } from './pages/news/news.component'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [IndexComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexModule,
    LayoutContainerModule,
    MatButtonModule,
  ],
  providers: [],
})
export class HomeModule {}
