import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageComponent} from './language/language.component';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SquareLanguageWithTextComponent} from './square-language-with-text/square-language-with-text.component';
import {LanguageMenuComponent} from './language-menu/language-menu.component';

@NgModule({
  declarations: [LanguageComponent, SquareLanguageWithTextComponent, LanguageMenuComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    LanguageComponent,
    SquareLanguageWithTextComponent,
    LanguageMenuComponent
  ]
})
export class LanguageChangerModule {
}
