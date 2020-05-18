import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Components
import { LayoutContainerComponent } from './components/layout-container'

@NgModule({
  declarations: [LayoutContainerComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [LayoutContainerComponent],
})
export class LayoutContainerModule {}
