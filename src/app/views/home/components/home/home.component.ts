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
    { name: 'PaymentsOs Secure Fields Form', url: '/add-card/secure-fields-form' },
    { name: 'PaymentsOs payments in one step', url: '/checkout-one-step' },
    { name: 'PayU WebCheckout', url: '/web-checkout' }
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
