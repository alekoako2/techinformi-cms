// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Directives
import { HideMissingLanguageElementDirective } from './hide-missing-language-element.directive'

@NgModule({
  declarations: [
    // Directives
    HideMissingLanguageElementDirective,
  ],
  imports: [
    // Native Modules
    CommonModule,
  ],
  exports: [
    // Directives
    HideMissingLanguageElementDirective,
  ],
})
export class HideMissingLanguageElementModule {}
