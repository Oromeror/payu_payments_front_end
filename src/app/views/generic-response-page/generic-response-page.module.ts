import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { GenericResponsePageRoutingModule } from './generic-response-page-routing.module';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { ReponsePageComponent } from './reponse-page/reponse-page.component';
import { ResponseHeadersComponent } from './components/response-headers/response-headers.component';
import { RequestHeadersComponent } from './components/request-headers/request-headers.component';
import { GeneralComponent } from './components/general/general.component';


@NgModule({
  declarations: [
    QueryParamsComponent,
    ReponsePageComponent,
    ResponseHeadersComponent,
    RequestHeadersComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    GenericResponsePageRoutingModule
  ]
})
export class GenericResponsePageModule { }
