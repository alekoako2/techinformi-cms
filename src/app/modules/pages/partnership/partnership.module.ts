import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PartnershipRoutingModule} from './partnership-routing.module';
import {PartnershipComponent} from './pages/partnership/partnership.component';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {PartnershipDialogComponent} from './components/partnership-dialog/partnership-dialog.component';
import {DialogModule} from '../../../shared/modules/dialog/dialog.module';
import {SanitizeHtmlModule} from '../../../shared/modules/sanitize-html/sanitize-html.module';
import {SpinnerModule} from '../../../shared/modules/spinner/spinner.module';

@NgModule({
  declarations: [PartnershipComponent, PartnershipDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    PartnershipRoutingModule,
    PageTitleBarModule,
    DialogModule,
    SanitizeHtmlModule,
    SpinnerModule
  ],
  entryComponents: [PartnershipDialogComponent]
})
export class PartnershipModule {
}
