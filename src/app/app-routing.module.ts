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
        path: 'integrations',
        loadChildren: () => import('./views/payu-latam-webcheckout/payu-latam-webcheckout-routing.module').then(m => m.PayuLatamWebcheckoutRoutingModule)
      },
      {
        path: 'integrations',
        loadChildren: () => import('./views/payu-hub-secure-fields-form/payu-hub-secure-fields-form.module').then(m => m.PayuHubSecureFieldsFormModule)
      },
      {
        path: 'integrations',
        loadChildren: () => import('./views/payu-hub-javascript-api/payu-hub-javascript-api.module').then(m => m.PayuHubJavascriptApiModule)
      },
      {
        path: 'integrations',
        loadChildren: () => import('./views/payu-hub-secure-cvv-form/payu-hub-secure-cvv-form.module').then(m => m.PayuHubSecureCvvFormModule)
      },
      {
        path: 'checkout-one-step',
        loadChildren: () => import('./views/paymentsos-one-step/paymentsos-one-step-routing.module').then(m => m.PaymentsosOneStepRoutingModule)
      },
      {
        path: 'web-checkout-response',
        loadChildren: () => import('./views/web-checkout-response/web-checkout-response.module').then(m => m.WebCheckoutResponseModule)
      },
      {
        path: 'generic-response-page',
        loadChildren: () => import('./views/payu-generic-response-page/payu-generic-response-page.module').then(m => m.PayuGenericResponsePageModule)
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
