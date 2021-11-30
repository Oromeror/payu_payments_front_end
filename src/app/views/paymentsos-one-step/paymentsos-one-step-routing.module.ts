import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentsosOneStepComponent} from "./paymentsos-one-step/paymentsos-one-step.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentsosOneStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsosOneStepRoutingModule { }
