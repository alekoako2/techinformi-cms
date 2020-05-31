import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NewsRoutingModule } from './news-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxsModule } from '@ngxs/store'
import { QuillModule } from 'ngx-quill'
import { NewsesCrudComponent } from './pages/newses-crud/newses-crud.component'
import { CreateNewsDialogComponent } from './components/create-news-dialog/create-news-dialog.component'
import { UpdateNewsDialogComponent } from './components/update-news-dialog/update-news-dialog.component'
import { DeleteNewsDialogComponent } from './components/delete-news-dialog/delete-news-dialog.component'
import { NewsFormComponent } from './components/news-form/news-form.component'
import { CustomDialogModule } from '@shared/components/custom-dialog'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { NewsesCrudState } from './store/states'
import { MatTabsModule } from '@angular/material/tabs'
import { InputTextModule } from '@shared/components/custom-inputs/input-text'
import { InputTextAreaModule } from '@shared/components/custom-inputs/input-text-area'
import { MatButtonModule } from '@angular/material/button'
import { CrudModule } from '@shared/modules/crud/crud.module'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    NewsesCrudComponent,
    CreateNewsDialogComponent,
    UpdateNewsDialogComponent,
    DeleteNewsDialogComponent,
    NewsFormComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    NgxsModule.forFeature([NewsesCrudState]),
    QuillModule.forRoot(),
    CustomDialogModule,
    LayoutContainerModule,
    PageTitleBarModule,
    MatTabsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextAreaModule,
    MatButtonModule,
    CrudModule,
    FlexLayoutModule,
  ],
})
export class NewsModule {}
