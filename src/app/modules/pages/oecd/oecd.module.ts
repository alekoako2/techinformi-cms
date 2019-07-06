import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OecdRoutingModule} from './oecd-routing.module';
import {OecdAutoCompleteInputComponent} from './components/oecd-auto-complete-input/oecd-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [OecdAutoCompleteInputComponent],
  imports: [
    CommonModule,
    OecdRoutingModule,
    SharedModule
  ],
  exports: [
    OecdAutoCompleteInputComponent
  ]
})
export class OecdModule {
}
