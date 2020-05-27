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
import { InputChipsComponent } from './input-chips.component'

@NgModule({
  declarations: [
    // Components
    InputChipsComponent,
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
  ],
  exports: [
    // Components
    InputChipsComponent,
  ],
})
export class InputChipsModule {}
