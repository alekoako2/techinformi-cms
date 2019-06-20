import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FaqRoutingModule} from './faq-routing.module';
import {FaqComponent} from './components/faq/faq.component';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [FaqComponent, IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    FaqRoutingModule,
  ]
})
export class FaqModule {
}
