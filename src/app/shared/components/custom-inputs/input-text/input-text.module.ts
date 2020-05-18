// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

// Components
import { InputTextComponent } from './input-text.component'

@NgModule({
  declarations: [
    // Components
    InputTextComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    // Components
    InputTextComponent,
  ],
})
export class InputTextModule {}
