import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OecdRoutingModule} from './oecd-routing.module';
import {OecdAutoCompleteInputComponent} from './components/oecd-auto-complete-input/oecd-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [OecdAutoCompleteInputComponent],
  imports: [
    CommonModule,
    OecdRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    OecdAutoCompleteInputComponent
  ]
})
export class OecdModule {
}
