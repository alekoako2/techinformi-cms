// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'

// Custom Modules
import { LayoutContainerModule } from '@shared/components/layout-container'

// Components
import { PageTitleBarComponent } from '@shared/components/page-title-bar/page-title-bar.component'

@NgModule({
  declarations: [
    // Components
    PageTitleBarComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    FormsModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    // Custom Modules
    LayoutContainerModule,
  ],
  exports: [
    // Components
    PageTitleBarComponent,
  ],
})
export class PageTitleBarModule {}
