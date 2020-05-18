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
import { OecdsSelectInputComponent } from '@shared/components/oecds-select-input/oecds-select-input.component'
import { InputSelectWithKeyModule } from '@shared/components/custom-inputs/input-select-with-key'

@NgModule({
  declarations: [
    // Components
    OecdsSelectInputComponent,
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
  ],
  exports: [
    // Components
    OecdsSelectInputComponent,
  ],
})
export class OecdsSelectInputModule {}
