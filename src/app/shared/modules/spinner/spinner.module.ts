import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutContainerModule} from '../layout-container/layout-container.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutContainerModule,
    MaterialModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule {
}
