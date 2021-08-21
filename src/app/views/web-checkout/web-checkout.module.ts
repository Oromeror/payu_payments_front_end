import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { WebCheckoutRoutingModule } from './web-checkout-routing.module';
import { WebCheckoutComponent } from './web-checkout/web-checkout.component';
import { SignatureComponent } from './components/signature/signature.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentFormSandboxComponent } from './components/payment-form-sandbox/payment-form-sandbox.component';
import { PaymentFormProductionComponent } from './components/payment-form-production/payment-form-production.component';


@NgModule({
  declarations: [
    WebCheckoutComponent,
    SignatureComponent,
    PaymentFormComponent,
    PaymentFormSandboxComponent,
    PaymentFormProductionComponent
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
