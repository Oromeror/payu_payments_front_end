import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { WebCheckoutResponseRoutingModule } from './web-checkout-response-routing.module';
import { WebCheckoutResponseComponent } from './web-checkout-response/web-checkout-response.component';
import { ResponseComponent } from './components/response/response.component';


@NgModule({
  declarations: [
    WebCheckoutResponseComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    WebCheckoutResponseRoutingModule
  ]
})
export class WebCheckoutResponseModule { }
