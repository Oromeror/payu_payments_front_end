import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureCvvFormComponent } from './components/secure-cvv-form/secure-cvv-form.component';

const routes: Routes = [
  {
  path: 'payu-hub-secure-cvv-form',
  component: SecureCvvFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayuHubSecureCvvFormRoutingModule { }
