import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptApiComponent } from './components/javascript-api/javascript-api.component';

const routes: Routes = [
  {
  path: 'payu-hub-javascript-api',
  component: JavascriptApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayuHubJavascriptApiRoutingModule { }
