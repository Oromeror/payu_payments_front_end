import { Component, OnInit } from '@angular/core';

declare function initPaymentOSSdk(): void;

@Component({
  selector: 'app-secure-fields-form',
  templateUrl: './secure-fields-form.component.html',
  styleUrls: ['./secure-fields-form.component.css']
})
export class SecureFieldsFormComponent implements OnInit {
  
  paymentsos: HTMLScriptElement;
  fontawesome: HTMLScriptElement;
  secureFields: HTMLScriptElement;

  constructor() { 
    this.paymentsos = document.createElement("script");
    this.paymentsos.src = "https://js.paymentsos.com/v3/latest/secure-fields.min.js";
    document.body.appendChild(this.paymentsos);

    this.fontawesome = document.createElement("script");
    this.fontawesome.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
    document.body.appendChild(this.fontawesome);

    this.secureFields = document.createElement("script");
    this.secureFields.src = "https://js.paymentsos.com/v3/latest/secure-fields.min.js";
    document.body.appendChild(this.secureFields);
  }

  ngOnInit(): void {
    initPaymentOSSdk();
  }

}
