import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QrjRoutingModule} from './qrj-routing.module';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './pages/index/index.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import {MainComponent} from './pages/main/main.component';
import {QrjPublicationDialogComponent} from './components/qrj-publication-dialog/qrj-publication-dialog.component';
import {OecdModule} from '../oecd/oecd.module';
import {JournalModule} from '../journal/journal.module';

@NgModule({
  declarations: [
    IndexComponent,
    PublicationsComponent,
    MainComponent,
    QrjPublicationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QrjRoutingModule,
    PageTitleBarModule,
    DialogModule,
    FormsModule,
    OecdModule,
    JournalModule
  ],
  entryComponents: [
    QrjPublicationDialogComponent
  ]
})
export class QrjModule {
}
