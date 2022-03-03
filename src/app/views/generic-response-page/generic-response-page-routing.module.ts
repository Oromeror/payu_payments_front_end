import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenericResponsePageComponent } from './components/generic-response-page/generic-response-page.component'

const routes: Routes = [
  {
    path: '',
    component: GenericResponsePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericResponsePageRoutingModule { }
