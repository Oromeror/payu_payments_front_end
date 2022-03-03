import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { GenericResponsePageRoutingModule } from './generic-response-page-routing.module';
import { GenericResponsePageComponent } from './components/generic-response-page/generic-response-page.component';


@NgModule({
  declarations: [
    GenericResponsePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    GenericResponsePageRoutingModule
  ]
})
export class GenericResponsePageModule { }
