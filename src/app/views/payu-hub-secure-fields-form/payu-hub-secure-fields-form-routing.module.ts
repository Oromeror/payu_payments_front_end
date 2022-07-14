import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureFieldsFormComponent } from './components/secure-fields-form/secure-fields-form.component';

const routes: Routes = [
  {
  path: 'payu-hub-secure-fields-form',
  component: SecureFieldsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayuHubSecureFieldsFormRoutingModule { }
