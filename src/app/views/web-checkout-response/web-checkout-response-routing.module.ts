import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCheckoutResponseComponent } from './web-checkout-response/web-checkout-response.component';

const routes: Routes = [
  {
    path: '',
    component: WebCheckoutResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCheckoutResponseRoutingModule { }
