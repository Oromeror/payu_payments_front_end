import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PaymentsosOneStepRoutingModule } from './paymentsos-one-step-routing.module';
import { PaymentsosOneStepComponent } from './paymentsos-one-step/paymentsos-one-step.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { NgxCcModule } from 'ngx-cc';
import { TokenComponent } from './components/token/token.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ChargeComponent } from './components/charge/charge.component';
import { RefundComponent } from './components/refund/refund.component';


@NgModule({
  declarations: [
    PaymentsosOneStepComponent,
    TokenComponent,
    PaymentComponent,
    ChargeComponent,
    RefundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CreditCardDirectivesModule,
    NgxCcModule,
    PaymentsosOneStepRoutingModule
  ]
})
export class PaymentsosOneStepModule { }
