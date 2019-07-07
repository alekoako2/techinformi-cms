import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {LayoutContainerModule} from '../layout-container/layout-container.module';
import {SpinnerModule} from '../spinner/spinner.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
