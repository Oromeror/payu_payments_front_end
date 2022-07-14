import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form-production',
  templateUrl: './payment-form-production.component.html',
  styleUrls: ['./payment-form-production.component.css']
})
export class PaymentFormProductionComponent implements OnInit {

  pricePattern = '^[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[.][1-9][0-9]*$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() { }

  ngOnInit(): void {
  }

}
