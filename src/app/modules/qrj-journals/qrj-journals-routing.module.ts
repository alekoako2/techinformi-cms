import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { QrjJournalsCrudComponent } from './pages/qrj-journals-crud/qrj-journals-crud.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QrjJournalsCrudComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrjJournalsRoutingModule {}
