import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScientificDirectionsComponent} from './pages/scientific-directions/scientific-directions.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {PublicationsComponent} from './pages/publications/publications.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: 'scientific-directions', component: ScientificDirectionsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'publications', component: PublicationsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScientificActivityRoutingModule {
}
