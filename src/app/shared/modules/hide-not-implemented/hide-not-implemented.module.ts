import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HideNotImplementedDirective} from './hide-not-implemented/hide-not-implemented.directive';

@NgModule({
  declarations: [HideNotImplementedDirective],
  imports: [
    CommonModule
  ],
  exports: [HideNotImplementedDirective]
})
export class HideNotImplementedModule {
}
