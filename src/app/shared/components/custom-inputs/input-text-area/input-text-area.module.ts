// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Material Modules
import { MatInputModule } from '@angular/material/input'

// Components
import { InputTextAreaComponent } from './input-text-area.component'

@NgModule({
  declarations: [
    // Components
    InputTextAreaComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    // Material Modules
    MatInputModule,
  ],
  exports: [
    // Components
    InputTextAreaComponent,
  ],
})
export class InputTextAreaModule {}
