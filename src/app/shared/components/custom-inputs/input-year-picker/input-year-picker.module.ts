// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Material Modules
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

// Components
import { InputYearPickerComponent } from './input-year-picker.component'

@NgModule({
  declarations: [
    // Components
    InputYearPickerComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    // Material Modules
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    // Components
    InputYearPickerComponent,
  ],
})
export class InputYearPickerModule {}
