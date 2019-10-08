import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {QrjPublicationsComponent} from './pages/qrj-publications/qrj-publications.component';
import {MainComponent} from './pages/main/main.component';

const routes: Routes = [{
  path: '', component: IndexComponent, children: [
    {
      path: '',
      component: MainComponent
    },
    {
      path: 'qrj-publications',
      component: QrjPublicationsComponent
    },
    {
      path: 'qrj-journals',
      loadChildren:
        () => import( '../qrj-journal/journal.module')
          .then(mod => mod.JournalModule),
    },
    {
      path: 'qrj',
      loadChildren:
        () => import( '../qrj/qrj.module')
          .then(mod => mod.QrjModule),
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
