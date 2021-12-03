import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

declare function initPaymentsOsCVVEncryptorJsSdk(): void;

@Component({
  selector: 'app-paymentsos-collect-cvv-code',
  templateUrl: './paymentsos-collect-cvv-code.component.html',
  styleUrls: ['./paymentsos-collect-cvv-code.component.css']
})
export class PaymentsosCollectCvvCodeComponent implements OnInit {

  cvvEncryptor: HTMLScriptElement
  fontawesome: HTMLScriptElement;

  paymentMethodTokenFormIsDisplayed = true;
  paymentMethodTokenForm:FormGroup;

  cvvFormIsDisplayed = false;
  cvvForm: FormGroup;

  constructor(
    private paymentMethodTokenFormBuilder: FormBuilder,
    private cvvFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.buildPaymentMethodTokenForm()
    this.showCvvForm()
    this.buildCvvForm()

    this.cvvEncryptor = document.createElement("script");
    this.cvvEncryptor.src = "https://js.paymentsos.com/v2/latest/token.min.js";
    document.body.appendChild(this.cvvEncryptor);

    this.fontawesome = document.createElement("script");
    this.fontawesome.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
    document.body.appendChild(this.fontawesome);
  }

  ngOnInit(): void {
    initPaymentsOsCVVEncryptorJsSdk();
  }

  private buildPaymentMethodTokenForm() {
    this.paymentMethodTokenForm = this.paymentMethodTokenFormBuilder.group({
      environment: ['', [Validators.required]],
      paymentMethodToken: ['', [Validators.required]],
      publicKey: ['', [Validators.required]],
    });
  }

  showCvvForm() {
    if (this.cvvFormIsDisplayed) {
      this.cvvFormIsDisplayed = false;
      this.paymentMethodTokenFormIsDisplayed = true;
    } else {
      this.cvvFormIsDisplayed = true;
      this.paymentMethodTokenFormIsDisplayed = false;
    }
  }

  private buildCvvForm() {
    this.cvvForm = this.cvvFormBuilder.group({
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    });
  }
  
  saveToken(event: Event) {
    event.preventDefault();
    if (this.paymentMethodTokenForm.valid) {
        this.snackBar.open('Successfully saved', '',{duration: 1500, panelClass: ['snackbar']})
    }
  }

  saveCvv(event: Event) {
    event.preventDefault();
    const value = this.cvvForm.value.cvv;
    if (this.cvvForm.valid) {
        this.snackBar.open('Token genenerated', '',{duration: 5000, panelClass: ['snackbar']})
    }
  }
}