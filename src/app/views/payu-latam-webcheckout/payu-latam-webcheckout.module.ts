import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PayuLatamWebcheckoutRoutingModule } from './payu-latam-webcheckout-routing.module';
import { WebcheckoutComponent } from './webcheckout/webcheckout.component';
import { SignatureComponent } from './components/signature/signature.component';
import { PaymentFormSandboxComponent } from './components/payment-form-sandbox/payment-form-sandbox.component';
import { PaymentFormProductionComponent } from './components/payment-form-production/payment-form-production.component';


@NgModule({
  declarations: [
    SignatureComponent,
    PaymentFormSandboxComponent,
    PaymentFormProductionComponent,
    WebcheckoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PayuLatamWebcheckoutRoutingModule
  ]
})
export class PayuLatamWebcheckoutModule { }
