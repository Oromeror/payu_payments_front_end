import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebcheckoutComponent } from './webcheckout/webcheckout.component';

const routes: Routes = [
  {
    path: 'payu-latam-webcheckout',
    component: WebcheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayuLatamWebcheckoutRoutingModule { }
