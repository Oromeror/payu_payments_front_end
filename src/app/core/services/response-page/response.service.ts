import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private http: HttpClient,
  ) { }

  getClientIpAddress() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
}