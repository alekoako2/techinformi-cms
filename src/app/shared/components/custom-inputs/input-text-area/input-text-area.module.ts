// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Material Modules
import { MatInputModule } from '@angular/material/input'

// Components
import { InputTextAreaComponent } from './input-text-area.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'

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
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    // Components
    InputTextAreaComponent,
  ],
})
export class InputTextAreaModule {}
