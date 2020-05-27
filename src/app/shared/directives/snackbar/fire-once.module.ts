// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Directives
import { FireOnceDirective } from './fire-once.directive'

@NgModule({
  declarations: [
    // Directives
    FireOnceDirective,
  ],
  imports: [
    // Native Modules
    CommonModule,
  ],
  exports: [
    // Directives
    FireOnceDirective,
  ],
})
export class FireOnceModule {}
