import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { IndexComponent } from './pages/index/index.component'
import { NewsComponent } from './pages/news/news.component'

const homeRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: IndexComponent },
      { path: 'news', component: NewsComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
