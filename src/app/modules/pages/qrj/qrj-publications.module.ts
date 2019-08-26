import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QrjPublicationsRoutingModule} from './qrj-publications-routing.module';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './pages/index/index.component';
import {QrjPublicationsComponent} from './pages/qrj-publications/qrj-publications.component';
import {MainComponent} from './pages/main/main.component';
import {QrjPublicationDialogComponent} from './components/qrj-publication-dialog/qrj-publication-dialog.component';
import {OecdModule} from '../oecd/oecd.module';
import {JournalModule} from '../journal/journal.module';
import {NgxsModule} from '@ngxs/store';
import {QrjPublicationsState} from './pages/qrj-publications/state/qrj-publications.state';
import {InputTextComponent} from './components/input-text/input-text.component';
import {InputSelectComponent} from './components/input-select/input-select.component';
import {InputTextAreaComponent} from './components/input-text-area/input-text-area.component';
import {DeleteQrjPublicationDialogComponent} from './components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component';

@NgModule({
  declarations: [
    IndexComponent,
    QrjPublicationsComponent,
    MainComponent,
    QrjPublicationDialogComponent,
    InputTextComponent,
    InputSelectComponent,
    InputTextAreaComponent,
    DeleteQrjPublicationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QrjPublicationsRoutingModule,
    PageTitleBarModule,
    DialogModule,
    NgxsModule.forFeature([QrjPublicationsState]),
    FormsModule,
    OecdModule,
    JournalModule
  ],
  entryComponents: [
    QrjPublicationDialogComponent,
    DeleteQrjPublicationDialogComponent
  ]
})
export class QrjPublicationsModule {
}
