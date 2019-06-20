import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {NotFoundComponent} from '../../../shared/components/not-found/not-found.component';

const contactRoutes: Routes = [
  {
    path: '', children: [
      {path: '', component: IndexComponent}
    ]
  },
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}


