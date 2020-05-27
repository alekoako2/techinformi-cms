import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Components
import { SpinnerComponent } from './spinner.component'
import { LayoutContainerModule } from '../layout-container'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    LayoutContainerModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
  ],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
