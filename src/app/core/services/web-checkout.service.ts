import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { WebCheckoutTransaction } from './../model/wc-transaction.model'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebCheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  createTestTransaction(WCTransaction: WebCheckoutTransaction) {
    const body = new HttpParams()
      .set('merchantId', WCTransaction.merchantId)
      .set('accountId', WCTransaction.accountId)
      .set('description', WCTransaction.description)
      .set('referenceCode', WCTransaction.referenceCode)
      .set('amount', WCTransaction.amount)
      .set('tax', WCTransaction.tax)
      .set('taxReturnBase', WCTransaction.taxReturnBase)
      .set('currency', WCTransaction.currency)
      .set('signature', WCTransaction.signature)
      .set('test', WCTransaction.test)
      .set('buyerEmail', WCTransaction.buyerEmail)
      .set('responseUrl', WCTransaction.responseUrl)
      .set('confirmationUrl', WCTransaction.confirmationUrl)

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('SameSite', 'None')

    console.log(body.toString());
    return this.http.post('https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/', body.toString(), { headers });
  }

  createProdTransaction(WCTransaction: WebCheckoutTransaction) {
    const body = new HttpParams()
      .set('merchantId', WCTransaction.merchantId)
      .set('accountId', WCTransaction.accountId)
      .set('description', WCTransaction.description)
      .set('referenceCode', WCTransaction.referenceCode)
      .set('amount', WCTransaction.amount)
      .set('tax', WCTransaction.tax)
      .set('taxReturnBase', WCTransaction.taxReturnBase)
      .set('currency', WCTransaction.currency)
      .set('signature', WCTransaction.signature)
      .set('test', WCTransaction.test)
      .set('buyerEmail', WCTransaction.buyerEmail)
      .set('responseUrl', WCTransaction.responseUrl)
      .set('confirmationUrl', WCTransaction.confirmationUrl)

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')

    console.log(body.toString());
    return this.http.post('https://checkout.payulatam.com/ppp-web-gateway-payu/', body.toString(), { headers });
  }

}
