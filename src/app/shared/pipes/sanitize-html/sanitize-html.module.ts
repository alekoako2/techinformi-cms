// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Pipes
import { SanitizeHtmlPipe } from '@shared/pipes/sanitize-html/sanitize-html.pipe'

@NgModule({
  declarations: [
    // Pipes
    SanitizeHtmlPipe,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
  ],
  exports: [
    // Pipes
    SanitizeHtmlPipe,
  ],
})
export class SanitizeHtmlModule {}
