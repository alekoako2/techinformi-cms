import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JournalRoutingModule} from './journal-routing.module';
import {QrjJournalAutoCompleteInputComponent} from './components/qrj-journal-auto-complete-input/qrj-journal-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [QrjJournalAutoCompleteInputComponent],
  imports: [
    CommonModule,
    JournalRoutingModule,
    SharedModule
  ],
  exports: [
    QrjJournalAutoCompleteInputComponent
  ]
})
export class JournalModule {
}
