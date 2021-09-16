import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsosSecureFieldsFormComponent } from './components/paymentsos-secure-fields-form/paymentsos-secure-fields-form.component'

const routes: Routes = [
  {
  path: 'paymentsos-secure-fields-form',
  component: PaymentsosSecureFieldsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsosSecureFieldsFormRoutingModule { }
