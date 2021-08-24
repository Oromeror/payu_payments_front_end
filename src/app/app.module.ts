import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { WebCheckoutModule } from './views/web-checkout/web-checkout.module';
import { WebCheckoutResponseModule } from './views/web-checkout-response/web-checkout-response.module';
import { ConfirmationComponent } from './views/web-checkout-confirmation/components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    WebCheckoutModule,
    WebCheckoutResponseModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
