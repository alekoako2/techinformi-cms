import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CrudBasicComponent } from './crud-basic.component'
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatPaginatorModule } from '@angular/material/paginator'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [CrudBasicComponent],
  exports: [CrudBasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    LayoutContainerModule,
    MatCardModule,
  ],
})
export class CrudBasicModule {}
