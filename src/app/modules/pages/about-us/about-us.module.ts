import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutUsRoutingModule} from './about-us-routing.module';
import {GeneralComponent} from './pages/general/general.component';
import {EmployeesStructureComponent} from './pages/employees-structure/employees-structure.component';
import {RegulationComponent} from './pages/regulation/regulation.component';
import {NormativeDocumentationComponent} from './pages/normative-documentation/normative-documentation.component';
import {EmployeesComponent} from './pages/employees/employees.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {HideMissingLanguageElementModule} from '../../../shared/modules/hide-missing-language-element/hide-missing-language-element.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';
import {FirebaseModule} from '../../../shared/modules/firebase/firebase.module';

@NgModule({
  declarations: [
    GeneralComponent,
    EmployeesStructureComponent,
    RegulationComponent,
    NormativeDocumentationComponent,
    EmployeesComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule,
    PageTitleBarModule,
    HideMissingLanguageElementModule,
    SanitizeHtmlModule,
  ]
})
export class AboutUsModule {
}
