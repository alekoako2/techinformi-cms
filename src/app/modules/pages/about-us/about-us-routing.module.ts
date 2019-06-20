import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GeneralComponent} from './pages/general/general.component';
import {EmployeesStructureComponent} from './pages/employees-structure/employees-structure.component';
import {RegulationComponent} from './pages/regulation/regulation.component';
import {NormativeDocumentationComponent} from './pages/normative-documentation/normative-documentation.component';
import {EmployeesComponent} from './pages/employees/employees.component';


const routes: Routes = [
  {
    path: '', children: [
      {path: 'general', component: GeneralComponent},
      {path: 'regulation', component: RegulationComponent},
      {path: 'employees-structure', component: EmployeesStructureComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'normative-documentation', component: NormativeDocumentationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
