import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {MapComponent} from './components/map/map.component';
import {ContactInfoComponent} from './components/contact-info/contact-info.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageTitleBarModule} from '../../../shared/modules/page-title-bar/page-title-bar.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [IndexComponent, MapComponent, ContactInfoComponent, ContactFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageTitleBarModule
  ]
})
export class ContactModule {
}
