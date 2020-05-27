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
import { InputSelectWithKeyComponent } from './input-select-with-key.component'
import { SpinnerModule } from '@shared/components/spinner'

@NgModule({
  declarations: [
    // Components
    InputSelectWithKeyComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    MatFormFieldModule,
    // Material Modules
    MatSelectModule,
    SpinnerModule,
  ],
  exports: [
    // Components
    InputSelectWithKeyComponent,
  ],
})
export class InputSelectWithKeyModule {}
