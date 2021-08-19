import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureFieldsFormComponent } from './complements/secure-fields-form/secure-fields-form.component';

const routes: Routes = [
  {
    path: 'secure-fields-form',
    component: SecureFieldsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureFieldsFormRoutingModule { }
