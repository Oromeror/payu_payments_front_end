import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
