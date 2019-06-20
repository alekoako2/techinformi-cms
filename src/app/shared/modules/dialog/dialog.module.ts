import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DialogComponent} from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DialogComponent]
})
export class DialogModule {
}
