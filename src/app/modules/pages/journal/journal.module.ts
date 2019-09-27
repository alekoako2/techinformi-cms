import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JournalRoutingModule} from './journal-routing.module';
import {QrjJournalAutoCompleteInputComponent} from './components/qrj-journal-auto-complete-input/qrj-journal-auto-complete-input.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './pages/index/index.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {NgxsModule} from '@ngxs/store';
import {OecdState} from '../oecd/state/oecd.state';
import {CrudBasicModule} from '../../../shared/modules/crud-basic/crud-basic.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {QrjJournalDeleteDialogComponent} from './components/qrj-journal-delete-dialog/qrj-journal-delete-dialog.component';
import {QrjJournalUpdateCreateDialogComponent} from './components/qrj-journal-update-create-dialog/qrj-journal-update-create-dialog.component';
import {QrjJournalState} from './state/qrj-journal.state';

@NgModule({
  declarations: [QrjJournalAutoCompleteInputComponent, IndexComponent, QrjJournalDeleteDialogComponent, QrjJournalUpdateCreateDialogComponent],
  imports: [
    CommonModule,
    JournalRoutingModule,
    SharedModule,
    FormsModule,
    PageTitleBarModule,
    NgxsModule.forFeature([
      QrjJournalState
    ]),
    CrudBasicModule,
    DialogModule
  ],
  entryComponents: [
    QrjJournalUpdateCreateDialogComponent,
    QrjJournalDeleteDialogComponent
  ]
})
export class JournalModule {
}
