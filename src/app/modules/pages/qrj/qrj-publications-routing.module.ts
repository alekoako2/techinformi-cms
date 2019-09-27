import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {QrjPublicationsComponent} from './pages/qrj-publications/qrj-publications.component';
import {MainComponent} from './pages/main/main.component';
import {AuthGuard} from '../../../core/guards/auth.guard';

const routes: Routes = [{
  path: '', component: IndexComponent, children: [
    {path: '', component: MainComponent},
    {path: 'qrj-publications', component: QrjPublicationsComponent},
    {
      path: 'qrj-journals', loadChildren:
        () => import( '../journal/journal.module')
          .then(mod => mod.JournalModule),
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrjPublicationsRoutingModule {
}
