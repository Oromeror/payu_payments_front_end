import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCheckoutComponent } from './components/web-checkout/web-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: WebCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCheckoutRoutingModule { }
