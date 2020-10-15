import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QrjJournalsRoutingModule } from './qrj-journals-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QrjJournalsCrudComponent } from './pages/qrj-journals-crud/qrj-journals-crud.component'
import { CreateQrjJournalDialogComponent } from './components/create-qrj-journal-dialog/create-qrj-journal-dialog.component'
import { NgxsModule } from '@ngxs/store'
import { QrjJournalsCrudState } from './store/states/qrj-journals-crud.state'
import { DeleteQrjJournalDialogComponent } from './components/delete-qrj-journal-dialog/delete-qrj-journal-dialog.component'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { CustomDialogModule } from '@shared/components/custom-dialog/custom-dialog.module'
import { MatButtonModule } from '@angular/material/button'
import { InputTextModule } from '@shared/components/custom-inputs/input-text'
import { FlexLayoutModule } from '@angular/flex-layout'
import { InputSelectModule } from '@shared/components/custom-inputs/input-select'
import { MatTabsModule } from '@angular/material/tabs'
import { InputTextAreaModule } from '@shared/components/custom-inputs/input-text-area'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { InputDisplayValueFilterAutocompleteModule } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.module'
import { UpdateQrjJournalDialogComponent } from './components/update-qrj-journal-dialog/update-qrj-journal-dialog.component'
import { QrjJournalFormComponent } from './components/qrj-journal-form/qrj-journal-form.component'
import { QrjJournalsInputDisplayValueFilterAutocompleteModule } from '@shared/components/qrj-journals-input-display-value-filter-autocomplete/qrj-journals-input-display-value-filter-autocomplete.module'
import { OecdsInputDisplayValueFilterAutocompleteModule } from '@shared/components/oecds-input-display-value-filter-autocomplete'
import { CrudModule } from '@shared/modules/crud/crud.module'

@NgModule({
  declarations: [
    QrjJournalsCrudComponent,
    CreateQrjJournalDialogComponent,
    UpdateQrjJournalDialogComponent,
    DeleteQrjJournalDialogComponent,
    QrjJournalFormComponent,
  ],
  imports: [
    CommonModule,
    QrjJournalsRoutingModule,
    NgxsModule.forFeature([QrjJournalsCrudState]),
    FormsModule,
    CustomDialogModule,
    PageTitleBarModule,
    MatButtonModule,
    InputTextModule,
    FlexLayoutModule,
    InputSelectModule,
    MatTabsModule,
    InputTextAreaModule,
    LayoutContainerModule,
    InputDisplayValueFilterAutocompleteModule,
    OecdsInputDisplayValueFilterAutocompleteModule,
    ReactiveFormsModule,
    QrjJournalsInputDisplayValueFilterAutocompleteModule,
    CrudModule,
  ],
  entryComponents: [
    CreateQrjJournalDialogComponent,
    DeleteQrjJournalDialogComponent,
    UpdateQrjJournalDialogComponent,
  ],
})
export class QrjJournalsModule {}
