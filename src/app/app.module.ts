import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaymentsosSecureFieldsFormModule } from './views/paymentsos-secure-fields-form/paymentsos-secure-fields-form.module'
import { PaymentsosOneStepModule } from './views/paymentsos-one-step/paymentsos-one-step.module'
import { WebCheckoutModule } from './views/web-checkout/web-checkout.module';
import { WebCheckoutResponseModule } from './views/web-checkout-response/web-checkout-response.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    PaymentsosSecureFieldsFormModule,
    PaymentsosOneStepModule,
    WebCheckoutModule,
    WebCheckoutResponseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
