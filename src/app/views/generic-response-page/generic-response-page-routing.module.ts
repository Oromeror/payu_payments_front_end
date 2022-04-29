import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReponsePageComponent } from './reponse-page/reponse-page.component'

const routes: Routes = [
  {
    path: '',
    component: ReponsePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericResponsePageRoutingModule { }
