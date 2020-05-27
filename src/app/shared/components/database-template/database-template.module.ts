import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Modules

// Components
import { DatabaseTemplatePaginatorComponent } from './components/database-template-paginator'
import { DatabaseTemplateFiltersComponent } from './components/database-template-filters'
import { DatabaseTemplateDetailsComponent } from './components/database-template-details'
import { DatabaseTemplateListComponent } from './components/database-template-list'
import { DatabaseTemplateComponent } from './components/database-template'
import { DatabaseTemplateListItemComponent } from './components/database-template-list-item'
import { MatDividerModule } from '@angular/material/divider'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
    DatabaseTemplatePaginatorComponent,
    DatabaseTemplateListItemComponent,
    DatabaseTemplateFiltersComponent,
    DatabaseTemplateDetailsComponent,
    DatabaseTemplateListComponent,
    DatabaseTemplateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    LayoutContainerModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxSkeletonLoaderModule,
    MatPaginatorModule,
  ],
  exports: [
    DatabaseTemplateComponent,
    DatabaseTemplateListItemComponent,
    DatabaseTemplateDetailsComponent,
  ],
})
export class DatabaseTemplateModule {}
