// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Directives
import { SnackbarDirective } from './snackbar.directive'

@NgModule({
  declarations: [
    // Directives
    SnackbarDirective,
  ],
  imports: [
    // Native Modules
    CommonModule,
  ],
  exports: [
    // Directives
    SnackbarDirective,
  ],
})
export class SnackbarModule {}
