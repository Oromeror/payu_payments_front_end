import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Card } from 'src/app/core/model/paymentsos/card.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient
  ) { }

  createToken(token: Card, contentType: string, apiVersion: string, paymentsOsEnv: string, appId: string, publicKey: string) {

    const headers = new HttpHeaders()
      .set('Content-Type', contentType)
      .set('api-version', apiVersion)
      .set('app-id', appId)
      .set('public-key', publicKey)
      .set('x-payments-os-env', paymentsOsEnv)

    return this.http.post(`http://127.0.0.1:5000/api/payu-hub/tokens`, token, { headers });
  }

}