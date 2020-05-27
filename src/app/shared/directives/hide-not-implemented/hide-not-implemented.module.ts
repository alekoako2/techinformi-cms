// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Directives
import { HideNotImplementedDirective } from './hide-not-implemented.directive'

@NgModule({
  declarations: [
    // Directives
    HideNotImplementedDirective,
  ],
  imports: [
    // Native Modules
    CommonModule,
  ],
  exports: [
    // Directives
    HideNotImplementedDirective,
  ],
})
export class HideNotImplementedModule {}
