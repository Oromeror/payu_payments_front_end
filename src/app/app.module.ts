import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaymentsosOneStepModule } from './views/paymentsos-one-step/paymentsos-one-step.module'
import { WebCheckoutResponseModule } from './views/web-checkout-response/web-checkout-response.module';


/**
 * PayU Hub 
 * Collecting card information
 * https://developers.paymentsos.com/docs/getting-started/collecting-card-information.html
 */

import { PayuHubSecureFieldsFormModule } from './views/payu-hub-secure-fields-form/payu-hub-secure-fields-form.module';
import { PayuHubSecureCvvFormModule } from './views/payu-hub-secure-cvv-form/payu-hub-secure-cvv-form.module';

/**
 * PayU Latam 
 * Webcheckout
 * https://developers.payulatam.com/latam/en/docs/integrations/webcheckout-integration.html
 */

import { PayuLatamWebcheckoutModule } from './views/payu-latam-webcheckout/payu-latam-webcheckout.module';
import { PayuGenericResponsePageModule } from './views/payu-generic-response-page/payu-generic-response-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    PaymentsosOneStepModule,
    WebCheckoutResponseModule,

    PayuLatamWebcheckoutModule,
    PayuGenericResponsePageModule,

    PayuHubSecureFieldsFormModule,
    PayuHubSecureCvvFormModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
