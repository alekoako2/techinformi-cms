import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidenavListComponent } from './sidenav-list/sidenav-list.component'
import { TopToolbarComponent } from './toolbars/top-toolbar/top-toolbar.component'
import { BottomToolbarComponent } from './toolbars/bottom-toolbar/bottom-toolbar.component'
import { LogoComponent } from './toolbars/top-toolbar/logo/logo.component'
import { SearchComponent } from './toolbars/top-toolbar/search/search.component'
import { UserToolsComponent } from './toolbars/top-toolbar/user-tools/user-tools.component'
import { ProfileComponent } from './toolbars/top-toolbar/user-tools/profile/profile.component'
import { RouterModule } from '@angular/router'
import { ResponsiveSearchComponent } from './toolbars/top-toolbar/responsive-search/responsive-search.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HideMissingLanguageElementModule } from '@shared/directives/hide-missing-language-element/hide-missing-language-element.module'
import { HideNotImplementedModule } from '@shared/directives/hide-not-implemented'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    SidenavListComponent,
    TopToolbarComponent,
    BottomToolbarComponent,
    LogoComponent,
    SearchComponent,
    UserToolsComponent,
    ProfileComponent,
    ResponsiveSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    LayoutContainerModule,
    MatToolbarModule,
    HideMissingLanguageElementModule,
    HideNotImplementedModule,
    FlexLayoutModule,
    MatExpansionModule,
  ],
  exports: [SidenavListComponent, TopToolbarComponent, BottomToolbarComponent],
})
export class HeaderModule {}
