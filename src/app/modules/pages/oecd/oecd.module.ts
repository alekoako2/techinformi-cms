import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OecdRoutingModule} from './oecd-routing.module';
import {OecdAutoCompleteInputComponent} from './components/oecd-auto-complete-input/oecd-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './pages/index/index.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';

@NgModule({
  declarations: [OecdAutoCompleteInputComponent, IndexComponent],
  imports: [
    CommonModule,
    OecdRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule
  ],
  exports: [
    OecdAutoCompleteInputComponent
  ]
})
export class OecdModule {
}
