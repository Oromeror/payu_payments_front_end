import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./views/secure-fields-form/secure-fields-form.module').then(m => m.SecureFieldsFormModule)
      },
      {
        path: 'web-checkout',
        loadChildren: () => import('./views/web-checkout/web-checkout-routing.module').then(m => m.WebCheckoutRoutingModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./views/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
