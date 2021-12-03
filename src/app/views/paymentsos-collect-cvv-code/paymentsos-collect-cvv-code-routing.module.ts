import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{PaymentsosCollectCvvCodeComponent} from './components/paymentsos-collect-cvv-code/paymentsos-collect-cvv-code.component'

const routes: Routes = [
  {
  path: 'collect-cvv-code',
  component: PaymentsosCollectCvvCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsosCollectCvvCodeRoutingModule { }