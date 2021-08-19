import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WebCheckoutTransaction } from './../model/wc-transaction.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebCheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  createTestTransaction(WCTransaction: WebCheckoutTransaction) {
    return this.http.post('https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/', WCTransaction);
  }

  createProdTransaction(WCTransaction: WebCheckoutTransaction) {
    return this.http.post('https://checkout.payulatam.com/ppp-web-gateway-payu/', WCTransaction);
  }

}
