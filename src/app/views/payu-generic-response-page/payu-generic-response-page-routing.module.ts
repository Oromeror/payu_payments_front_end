import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponsePageComponent } from './response-page/response-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayuGenericResponsePageRoutingModule { }
