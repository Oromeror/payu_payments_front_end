import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PaymentsosSecureFieldsFormRoutingModule } from './paymentsos-secure-fields-form-routing.module';
import { PaymentsosSecureFieldsFormComponent } from './components/paymentsos-secure-fields-form/paymentsos-secure-fields-form.component';


@NgModule({
  declarations: [
    PaymentsosSecureFieldsFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PaymentsosSecureFieldsFormRoutingModule
  ]
})
export class PaymentsosSecureFieldsFormModule { }
