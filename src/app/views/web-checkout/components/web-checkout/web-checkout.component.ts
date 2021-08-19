import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { WebCheckoutSignature } from 'src/app/core/model/wc-signature.model';
import { WebCheckoutTransaction } from 'src/app/core/model/wc-transaction.model';

import { WebCheckoutService } from 'src/app/core/services/web-checkout.service';

import { Md5 } from "md5-typescript";
import * as shajs from 'sha.js';

@Component({
  selector: 'app-web-checkout',
  templateUrl: './web-checkout.component.html',
  styleUrls: ['./web-checkout.component.css']
})
export class WebCheckoutComponent implements OnInit {

  signatureForm: FormGroup;
  webCheckoutForm: FormGroup;
  test: boolean;
  signatures: { hashType: string, hash: string }[] = [];

  pricePattern = '^[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private signatureFormBuilder: FormBuilder,
    private webCheckoutFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private wcService: WebCheckoutService,
  ) {
    this.buildSignatureForm(),
      this.buildWebCheckoutForm()
  }

  ngOnInit(): void {
  }

  private buildSignatureForm() {
    this.signatureForm = this.signatureFormBuilder.group({
      apiKey: ['', [Validators.required]],
      merchantId: ['', [Validators.required]],
      referenceCode: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(this.pricePattern)]],
      currency: ['', [Validators.required]]
    })
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
      signature: ['', [Validators.required]],
      test: ['', [Validators.required]],
      buyerEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      responseUrl: ['', [Validators.required]],
      confirmationUrl: ['', [Validators.required]]
    });
  }

  createSignature(event: Event) {
    event.preventDefault();
    if (this.signatureForm.valid) {
      const value = this.signatureForm.value;
      const nonEncryptedSignature = value.apiKey + "~" + value.merchantId + "~" + value.referenceCode + "~" + value.amount + "~" + value.currency;
      const wcSignature: WebCheckoutSignature = {
        apiKey: value.apiKey,
        merchantId: value.merchantId,
        referenceCode: value.referenceCode,
        amount: value.amount,
        currency: value.currency
      }
      console.log(wcSignature);

      this.signatures = [
        { hashType: 'non-encrypted', hash: nonEncryptedSignature },
        { hashType: 'MD5', hash: this.generateMD5Signature(nonEncryptedSignature) },
        { hashType: 'SHA1', hash: this.generateSHA1Signature(nonEncryptedSignature) },
        { hashType: 'SHA256', hash: this.generateSHA256Signature(nonEncryptedSignature) },
      ]
    }
  }

  generateMD5Signature(signature: string) {
    return Md5.init(signature);
  }

  generateSHA1Signature(signature: string) {
    const data = signature;
    const sha1Signature = shajs('sha1').update(data).digest('hex');
    return sha1Signature;
  }

  generateSHA256Signature(signature: string) {
    const data = signature;
    const sha256Signature = shajs('sha256').update(data).digest('hex');
    return sha256Signature;
  }

  generateTestTrx(newTransaction: WebCheckoutTransaction) {
    this.wcService.createTestTransaction(newTransaction).subscribe(
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
        signature: value.signature,
        test: value.test,
        buyerEmail: value.buyerEmail,
        responseUrl: value.responseUrl,
        confirmationUrl: value.confirmationUrl
      };
      if (newTransaction.test == 1) {
        console.log('calling test service')
        this.generateTestTrx(newTransaction);
      } else {
        console.log('calling prod service')
        this.generateProdTrx(newTransaction);
      }
    }
  }
}