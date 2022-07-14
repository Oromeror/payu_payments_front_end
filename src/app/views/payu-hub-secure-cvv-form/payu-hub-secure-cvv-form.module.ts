import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PayuHubSecureCvvFormRoutingModule } from './payu-hub-secure-cvv-form-routing.module';
import { SecureCvvFormComponent } from './components/secure-cvv-form/secure-cvv-form.component';


@NgModule({
  declarations: [
    SecureCvvFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PayuHubSecureCvvFormRoutingModule
  ]
})
export class PayuHubSecureCvvFormModule { }
