// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Library Modules

// Material Modules

// Components
import { NotFoundComponent } from './not-found.component'

@NgModule({
  declarations: [
    // Components
    NotFoundComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    // Library Modules
    // Material Modules
  ],
  exports: [
    // Components
    NotFoundComponent,
  ],
})
export class NotFoundModule {}
