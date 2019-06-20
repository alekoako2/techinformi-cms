import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutContainerComponent} from './components/layout-container/layout-container.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [LayoutContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LayoutContainerComponent]
})
export class LayoutContainerModule {
}
