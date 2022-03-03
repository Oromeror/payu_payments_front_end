import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from 'src/app/core/services/paymentsos/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  submitted: boolean = false;
  paymentResponse: any;
  pricePattern = '^[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[.][1-9][0-9]*$';

  constructor(
    private paymentFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private tokenService: PaymentService,
  ) {
    this.buildPaymentForm()
   }

  ngOnInit() {
  }

  private buildPaymentForm() {
    this.paymentForm = this.paymentFormBuilder.group({
      currency: ['', [Validators.required]],
    });
  }

  createPayment(event: Event) {
  }

}
