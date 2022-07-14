import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PayuHubSecureFieldsFormRoutingModule } from './payu-hub-secure-fields-form-routing.module';
import { SecureFieldsFormComponent } from './components/secure-fields-form/secure-fields-form.component';


@NgModule({
  declarations: [
    SecureFieldsFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PayuHubSecureFieldsFormRoutingModule
  ]
})
export class PayuHubSecureFieldsFormModule { }
