import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Modules
import { MatDialogModule } from '@angular/material/dialog'

// Components
import { CustomDialogComponent } from './custom-dialog.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [CustomDialogComponent],
  imports: [CommonModule, MatDialogModule, FlexLayoutModule, MatButtonModule],
  exports: [CustomDialogComponent],
})
export class CustomDialogModule {}
