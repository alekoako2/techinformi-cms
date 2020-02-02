import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudBasicComponent} from './components/crud-basic/crud-basic.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CrudBasicComponent],
  exports: [
    CrudBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class CrudBasicModule {
}
