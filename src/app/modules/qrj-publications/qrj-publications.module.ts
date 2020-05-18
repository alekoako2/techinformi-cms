import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QrjPublicationsRoutingModule } from './qrj-publications-routing.module'
import { FormsModule } from '@angular/forms'
import { QrjPublicationsCrudComponent } from './pages/qrj-publications-crud/qrj-publications-crud.component'
import { QrjPublicationsNavigationComponent } from './pages/qrj-publications-navigation/qrj-publications-navigation.component'
import { UpsertQrjPublicationDialogComponent } from './components/upsert-qrj-publication-dialog/upsert-qrj-publication-dialog.component'
import { NgxsModule } from '@ngxs/store'
import { QrjPublicationsCrudState } from './states/qrj-publications-crud-state/qrj-publications-crud.state'
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
import { InputFilterAutocompleteModule } from '@shared/components/custom-inputs/input-filter-autocomplete'

@NgModule({
  declarations: [
    QrjPublicationsCrudComponent,
    QrjPublicationsNavigationComponent,
    UpsertQrjPublicationDialogComponent,
    DeleteQrjPublicationDialogComponent,
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
    InputFilterAutocompleteModule,
  ],
  entryComponents: [
    UpsertQrjPublicationDialogComponent,
    DeleteQrjPublicationDialogComponent,
  ],
})
export class QrjPublicationsModule {}
