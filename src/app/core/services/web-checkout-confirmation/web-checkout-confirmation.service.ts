import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebCheckoutConfirmationService {

  constructor() { }

  // onConfirmTransaction(data: FormData): Observable<any> {
  //   return this.http.post<any>('', data)
  // }
}
