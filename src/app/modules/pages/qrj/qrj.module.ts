import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QrjRoutingModule} from './qrj-routing.module';
import {QrjComponent} from './pages/qrj/qrj.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {DescriptionComponent} from './components/description/description.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {QrjDialogComponent} from './components/qrj-dialog/qrj-dialog.component';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {FormsModule} from '@angular/forms';
import {FilterOecdPipe} from './components/qrj-dialog/pipes/filter-oecd.pipe';

@NgModule({
  declarations: [QrjComponent, DescriptionComponent, QrjDialogComponent, FilterOecdPipe, FilterOecdPipe],
  imports: [
    CommonModule,
    SharedModule,
    QrjRoutingModule,
    PageTitleBarModule,
    DialogModule,
    FormsModule,
  ],
  entryComponents: [QrjDialogComponent]
})
export class QrjModule {
}
