import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Router } from '@angular/router';

import { WebCheckoutTransaction } from 'src/app/core/model/wc-transaction.model';

import { WebCheckoutService } from 'src/app/core/services/web-checkout.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  webCheckoutForm: FormGroup;
  test: boolean;
  pricePattern = '^[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private webCheckoutFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    //private router: Router,
    private wcService: WebCheckoutService,
  ) {
    this.buildWebCheckoutForm()
  }

  ngOnInit(): void {
  }
  private buildWebCheckoutForm() {
    this.webCheckoutForm = this.webCheckoutFormBuilder.group({
      merchantId: ['', [Validators.required]],
      accountId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      referenceCode: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(this.pricePattern)]],
      tax: ['', [Validators.required, Validators.pattern(this.pricePattern)]],
      taxReturnBase: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      algorithmSignature: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      test: ['', [Validators.required]],
      buyerEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      responseUrl: ['', [Validators.required]],
      confirmationUrl: ['', [Validators.required]]
    });
  }

  createTransaction(event: Event) {
    event.preventDefault();
    if (this.webCheckoutForm.valid) {
      const value = this.webCheckoutForm.value;
      const newTransaction: WebCheckoutTransaction = {
        merchantId: value.merchantId,
        accountId: value.accountId,
        description: value.description,
        referenceCode: value.referenceCode,
        amount: value.amount,
        tax: value.tax,
        taxReturnBase: value.taxReturnBase,
        currency: value.currency,
        algorithmSignature: value.algorithmSignature,
        signature: value.signature,
        test: value.test,
        buyerEmail: value.buyerEmail,
        responseUrl: value.responseUrl,
        confirmationUrl: value.confirmationUrl
      };
      if (newTransaction.test == 1) {
        console.log('calling Test service')
        //this.generateTestTrx(newTransaction);
      } else {
        console.log('calling Prod service')
        //this.generateProdTrx(newTransaction);
      }
    }
  }

  generateTestTrx(newTransaction: WebCheckoutTransaction) {
    this.wcService.createTestTransaction(newTransaction).subscribe(
      (response: any) => {
        console.log(response.headers.get('Location'));
        this.snackBar.open('Transacción creada exitosamente', 'cerrar', { duration: 5000 });
        console.log(response);
      },
      (error: any) => {
        this.snackBar.open('Ha ocurrido un error inesperado.', 'cerrar', { duration: 5000 });
      }
    );
  }

  generateProdTrx(newTransaction: WebCheckoutTransaction) {
    this.wcService.createProdTransaction(newTransaction).subscribe(
      (response: any) => {
        this.snackBar.open('Transacción creada exitosamente', 'cerrar', { duration: 5000 });
        console.log(response);
        //this.router.navigate(['/home']);
      },
      (error: any) => {
        this.snackBar.open('Ha ocurrido un error inesperado.', 'cerrar', { duration: 5000 });
      }
    );
  }
}
