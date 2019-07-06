import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import {MainComponent} from './pages/main/main.component';

const routes: Routes = [{
  path: '', component: IndexComponent, children: [
    {path: '', component: MainComponent},
    {path: 'publications', component: PublicationsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrjRoutingModule {
}
