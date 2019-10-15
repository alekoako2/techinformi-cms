import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from './input-text/input-text.component';
import {InputTextAreaComponent} from './input-text-area/input-text-area.component';
import {InputSelectComponent} from './input-select/input-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutContainerModule} from '../layout-container/layout-container.module';
import {InputAutoCompleteComponent} from './input-auto-complete/input-auto-complete.component';
import {InputMultipleSelectComponent} from './input-multiple-select/input-multiple-select.component';
import {InputChipsComponent} from './input-chips/input-chips.component';


@NgModule({
  declarations: [
    InputTextComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputAutoCompleteComponent,
    InputMultipleSelectComponent,
    InputChipsComponent
  ],
  exports: [
    InputTextComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputAutoCompleteComponent,
    InputMultipleSelectComponent,
    InputChipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LayoutContainerModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class CustomInputsModule {
}
