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
import { OecdsFilterAutocompleteComponent } from '@shared/components/oecds-filter-autocomplete/oecds-filter-autocomplete.component'
import { InputFilterAutocompleteModule } from '@shared/components/custom-inputs/input-filter-autocomplete'

@NgModule({
  declarations: [
    // Components
    OecdsFilterAutocompleteComponent,
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
    InputFilterAutocompleteModule,
  ],
  exports: [
    // Components
    OecdsFilterAutocompleteComponent,
  ],
})
export class OecdsFilterAutocompleteModule {}
