import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Card } from 'src/app/core/model/paymentsos/card.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient
  ) { }

  createToken(token: Card, paymentsOsEnv: string, appId:string, privateKey:string) {
    
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('api-version', '1.3.0')
    .set('x-payments-os-env', paymentsOsEnv)
    .set('app-id', appId)
    .set('private-key', privateKey)

    return this.http.post(`${environment.url_api}/tokens`, token, {headers});
  }

}