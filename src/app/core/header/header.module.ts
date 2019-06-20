import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavListComponent} from './sidenav-list/sidenav-list.component';
import {TopToolbarComponent} from './toolbars/top-toolbar/top-toolbar.component';
import {BottomToolbarComponent} from './toolbars/bottom-toolbar/bottom-toolbar.component';
import {MaterialModule} from '../../shared/modules/material/material.module';
import {LogoComponent} from './toolbars/top-toolbar/logo/logo.component';
import {SearchComponent} from './toolbars/top-toolbar/search/search.component';
import {UserToolsComponent} from './toolbars/top-toolbar/user-tools/user-tools.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ShoppingCartComponent} from './toolbars/top-toolbar/user-tools/shopping-cart/shopping-cart.component';
import {ProfileComponent} from './toolbars/top-toolbar/user-tools/profile/profile.component';
import {RouterModule} from '@angular/router';
import {ResponsiveSearchComponent} from './toolbars/top-toolbar/responsive-search/responsive-search.component';
import {LanguageComponent} from './toolbars/top-toolbar/user-tools/language/language.component';
import {HideNotImplementedModule} from '../../shared/modules/hide-not-implemented/hide-not-implemented.module';
import {HideMissingLanguageElementModule} from '../../shared/modules/hide-missing-language-element/hide-missing-language-element.module';
import {SharedModule} from '../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    SidenavListComponent,
    TopToolbarComponent,
    BottomToolbarComponent,
    LogoComponent,
    SearchComponent,
    UserToolsComponent,
    ShoppingCartComponent,
    ProfileComponent,
    ResponsiveSearchComponent,
    LanguageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HideNotImplementedModule,
    HideMissingLanguageElementModule
  ],
  exports: [
    SidenavListComponent,
    TopToolbarComponent,
    BottomToolbarComponent,
  ]
})
export class HeaderModule {
}
