import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {ProductDetailsContentComponent} from './components/product-details-content/product-details-content.component';
import {ProductDetailsImagesComponent} from './components/product-details-images/product-details-images.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [IndexComponent, ProductDetailsImagesComponent, ProductDetailsContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsRoutingModule,
  ]
})
export class ProductDetailsModule {
}
