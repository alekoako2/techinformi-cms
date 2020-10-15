import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DepositedsRoutingModule } from './depositeds-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DepositedsCrudComponent } from './pages/depositeds-crud/depositeds-crud.component'
import { DepositedsNavigationComponent } from './pages/depositeds-navigation/depositeds-navigation.component'
import { CreateDepositedDialogComponent } from './components/create-deposited-dialog/create-deposited-dialog.component'
import { NgxsModule } from '@ngxs/store'
import { DepositedsCrudState } from './store/states'
import { DeleteDepositedDialogComponent } from './components/delete-deposited-dialog/delete-deposited-dialog.component'
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
import { UpdateDepositedDialogComponent } from './components/update-deposited-dialog/update-deposited-dialog.component'
import { DepositedFormComponent } from './components/deposited-form/deposited-form.component'
import { QrjJournalsInputDisplayValueFilterAutocompleteModule } from '@shared/components/qrj-journals-input-display-value-filter-autocomplete/qrj-journals-input-display-value-filter-autocomplete.module'
import { OecdsInputDisplayValueFilterAutocompleteModule } from '@shared/components/oecds-input-display-value-filter-autocomplete'
import { CrudModule } from '@shared/modules/crud/crud.module'

@NgModule({
  declarations: [
    DepositedsCrudComponent,
    DepositedsNavigationComponent,
    CreateDepositedDialogComponent,
    UpdateDepositedDialogComponent,
    DeleteDepositedDialogComponent,
    DepositedFormComponent,
  ],
  imports: [
    CommonModule,
    DepositedsRoutingModule,
    NgxsModule.forFeature([DepositedsCrudState]),
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
    CreateDepositedDialogComponent,
    DeleteDepositedDialogComponent,
    UpdateDepositedDialogComponent,
  ],
})
export class DepositedsModule {}
