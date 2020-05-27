import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QrjPublicationsRoutingModule } from './qrj-publications-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QrjPublicationsCrudComponent } from './pages/qrj-publications-crud/qrj-publications-crud.component'
import { QrjPublicationsNavigationComponent } from './pages/qrj-publications-navigation/qrj-publications-navigation.component'
import { CreateQrjPublicationDialogComponent } from './components/create-qrj-publication-dialog/create-qrj-publication-dialog.component'
import { NgxsModule } from '@ngxs/store'
import { QrjPublicationsCrudState } from './store/state'
import { DeleteQrjPublicationDialogComponent } from './components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component'
import { CrudBasicModule } from '@shared/components/crud-templates/crud-basic/crud-basic.module'
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
import { OecdsInputDisplayValueFilterAutocompleteModule } from '@shared/components/oecds-input-display-value-filter-autocomplete/oecds-input-display-value-filter-autocomplete.module'
import { UpdateQrjPublicationDialogComponent } from './components/update-qrj-publication-dialog/update-qrj-publication-dialog.component'
import { QrjPublicationFormComponent } from './components/qrj-publication-form/qrj-publication-form.component'
import { QrjJournalsInputDisplayValueFilterAutocompleteModule } from '@shared/components/qrj-journals-input-display-value-filter-autocomplete/qrj-journals-input-display-value-filter-autocomplete.module'

@NgModule({
  declarations: [
    QrjPublicationsCrudComponent,
    QrjPublicationsNavigationComponent,
    CreateQrjPublicationDialogComponent,
    UpdateQrjPublicationDialogComponent,
    DeleteQrjPublicationDialogComponent,
    QrjPublicationFormComponent,
  ],
  imports: [
    CommonModule,
    QrjPublicationsRoutingModule,
    NgxsModule.forFeature([QrjPublicationsCrudState]),
    FormsModule,
    CustomDialogModule,
    CrudBasicModule,
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
  ],
  entryComponents: [
    CreateQrjPublicationDialogComponent,
    DeleteQrjPublicationDialogComponent,
    UpdateQrjPublicationDialogComponent,
  ],
})
export class QrjPublicationsModule {}
