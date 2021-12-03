import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PaymentsosCollectCvvCodeRoutingModule } from './paymentsos-collect-cvv-code-routing.module';
import { PaymentsosCollectCvvCodeComponent } from './components/paymentsos-collect-cvv-code/paymentsos-collect-cvv-code.component';

@NgModule({
  declarations: [
    PaymentsosCollectCvvCodeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PaymentsosCollectCvvCodeRoutingModule
  ]
})
export class PaymentsosCollectCvvCodeModule { }
