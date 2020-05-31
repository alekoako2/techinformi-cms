import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewsesCrudComponent } from './pages/newses-crud/newses-crud.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewsesCrudComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
