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
    { name: 'Secure Fields Form - PaymentsOS', url: '/checkout/paymentsos-secure-fields-form' },
    { name: 'WebCheckout - PayU', url: '/web-checkout' }
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
