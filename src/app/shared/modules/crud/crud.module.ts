import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CrudBasicComponent } from '@shared/modules/crud/components/crud-basic'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [CrudBasicComponent],
  imports: [
    CommonModule,
    LayoutContainerModule,
    FlexLayoutModule,
    MatDividerModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [CrudBasicComponent],
})
export class CrudModule {}
