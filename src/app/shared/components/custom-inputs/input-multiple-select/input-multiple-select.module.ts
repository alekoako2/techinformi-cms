// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'

// Components
import { InputMultipleSelectComponent } from './input-multiple-select.component'

@NgModule({
  declarations: [
    // Components
    InputMultipleSelectComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    // Components
    InputMultipleSelectComponent,
  ],
})
export class InputMultipleSelectModule {}
