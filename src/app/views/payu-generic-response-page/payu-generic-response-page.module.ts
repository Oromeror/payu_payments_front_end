import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { PayuGenericResponsePageRoutingModule } from './payu-generic-response-page-routing.module';
import { ResponsePageComponent } from './response-page/response-page.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { RequestHeadersComponent } from './components/request-headers/request-headers.component';
import { ResponseHeadersComponent } from './components/response-headers/response-headers.component';
import { GeneralComponent } from './components/general/general.component';

@NgModule({
  declarations: [
    ResponsePageComponent,
    QueryParamsComponent,
    RequestHeadersComponent,
    ResponseHeadersComponent,
    GeneralComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PayuGenericResponsePageRoutingModule
  ]
})
export class PayuGenericResponsePageModule { }
