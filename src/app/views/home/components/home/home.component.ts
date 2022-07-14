import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: any[] = [];

  urls: { name: string, url: string }[] = [
    { name: 'PayU Latam - WebCheckout', url: '/integrations/payu-latam-webcheckout' },
    { name: 'PayU Hub - Secure Fields Form', url: '/integrations/payu-hub-secure-fields-form' },
    { name: 'PayU Hub - Javascript API', url: '/integrations/payu-hub-javascript-api' },
    { name: 'PayU Hub - Secure CVV Form', url: '/integrations/payu-hub-secure-cvv-form' },
    //{ name: 'PayU Hub - Payments API - Charge', url: '/checkout-one-step' }
  ];
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
