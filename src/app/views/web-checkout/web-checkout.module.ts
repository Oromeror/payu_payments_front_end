import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { WebCheckoutRoutingModule } from './web-checkout-routing.module';
import { WebCheckoutComponent } from './components/web-checkout/web-checkout.component';


@NgModule({
  declarations: [
    WebCheckoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    WebCheckoutRoutingModule
  ],
  })
export class WebCheckoutModule { }
