import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HideMissingLanguageElementDirective} from './hide-missing-language-element/hide-missing-language-element.directive';

@NgModule({
  declarations: [HideMissingLanguageElementDirective],
  imports: [
    CommonModule
  ],
  exports: [HideMissingLanguageElementDirective]
})
export class HideMissingLanguageElementModule {
}
