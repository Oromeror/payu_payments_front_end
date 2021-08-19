import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureFieldsFormRoutingModule } from './secure-fields-form-routing.module';
import { SecureFieldsFormComponent } from './complements/secure-fields-form/secure-fields-form.component';


@NgModule({
  declarations: [
    SecureFieldsFormComponent
  ],
  imports: [
    CommonModule,
    SecureFieldsFormRoutingModule
  ]
})
export class SecureFieldsFormModule { }
