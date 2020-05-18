// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'

// Components
import { InputFilterAutocompleteComponent } from './input-filter-autocomplete.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    // Components
    InputFilterAutocompleteComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    // Components
    InputFilterAutocompleteComponent,
  ],
})
export class InputFilterAutocompleteModule {}
