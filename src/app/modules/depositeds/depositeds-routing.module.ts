import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DepositedsCrudComponent } from './pages/depositeds-crud/depositeds-crud.component'
import { DepositedsNavigationComponent } from './pages/depositeds-navigation/depositeds-navigation.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DepositedsNavigationComponent,
      },
      {
        path: 'depositeds-crud',
        component: DepositedsCrudComponent,
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
export class DepositedsRoutingModule {}
