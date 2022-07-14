import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PayuHubJavascriptApiRoutingModule } from './payu-hub-javascript-api-routing.module';
import { JavascriptApiComponent } from './components/javascript-api/javascript-api.component';

import { NgxCcModule } from 'ngx-cc';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  declarations: [
    JavascriptApiComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCcModule,
    CreditCardDirectivesModule,
    PayuHubJavascriptApiRoutingModule
  ]
})
export class PayuHubJavascriptApiModule { }
