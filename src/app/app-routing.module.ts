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
        path: 'add-card',
        loadChildren: () => import('./views/paymentsos-secure-fields-form/paymentsos-secure-fields-form.module').then(m => m.PaymentsosSecureFieldsFormModule)
      },
      {
        path: 'cvv-encrypter',
        loadChildren: () => import('./views/paymentsos-collect-cvv-code/paymentsos-collect-cvv-code.module').then(m => m.PaymentsosCollectCvvCodeModule)
      },
      {
        path: 'checkout-one-step',
        loadChildren: () => import('./views/paymentsos-one-step/paymentsos-one-step-routing.module').then(m => m.PaymentsosOneStepRoutingModule)
      },
      {
        path: 'web-checkout',
        loadChildren: () => import('./views/web-checkout/web-checkout-routing.module').then(m => m.WebCheckoutRoutingModule)
      },
      {
        path: 'web-checkout-response',
        loadChildren: () => import('./views/web-checkout-response/web-checkout-response.module').then(m => m.WebCheckoutResponseModule)
      },
      {
        path: 'generic-response-page',
        loadChildren: () => import('./views/generic-response-page/generic-response-page.module').then(m => m.GenericResponsePageModule)
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
