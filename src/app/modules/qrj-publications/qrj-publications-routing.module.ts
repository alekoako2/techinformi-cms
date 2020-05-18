import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { QrjPublicationsCrudComponent } from './pages/qrj-publications-crud/qrj-publications-crud.component'
import { QrjPublicationsNavigationComponent } from './pages/qrj-publications-navigation/qrj-publications-navigation.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QrjPublicationsNavigationComponent,
      },
      {
        path: 'qrj-publications-crud',
        component: QrjPublicationsCrudComponent,
      },
      // {
      //   path: 'qrj-journals',
      //   loadChildren: () =>
      //     import('../qrj-journal/journal.module').then(
      //       (mod) => mod.JournalModule
      //     ),
      // },
      // {
      //   path: 'qrj',
      //   loadChildren: () =>
      //     import('../qrj/qrj.module').then((mod) => mod.QrjModule),
      // },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrjPublicationsRoutingModule {}
