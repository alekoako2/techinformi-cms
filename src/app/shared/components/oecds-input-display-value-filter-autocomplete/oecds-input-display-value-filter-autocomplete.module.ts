// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'

// Components
import { InputSelectWithKeyModule } from '@shared/components/custom-inputs/input-select-with-key'
import { OecdsInputDisplayValueFilterAutocompleteComponent } from './oecds-input-display-value-filter-autocomplete.component'
import { InputDisplayValueFilterAutocompleteModule } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.module'

@NgModule({
  declarations: [
    // Components
    OecdsInputDisplayValueFilterAutocompleteComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    InputSelectWithKeyModule,
    InputDisplayValueFilterAutocompleteModule,
  ],
  exports: [
    // Components
    OecdsInputDisplayValueFilterAutocompleteComponent,
  ],
})
export class OecdsInputDisplayValueFilterAutocompleteModule {}
