// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Pipes
import { NotEmptyPipe } from '@shared/pipes/not-empty/not-empty.pipe'

@NgModule({
  declarations: [
    // Pipes
    NotEmptyPipe,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
  ],
  exports: [
    // Pipes
    NotEmptyPipe,
  ],
})
export class NotEmptyModule {}
