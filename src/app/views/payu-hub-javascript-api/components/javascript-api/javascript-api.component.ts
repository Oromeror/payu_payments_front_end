import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreditCardValidators } from 'angular-cc-library';

declare function initPayUHubJavascriptApiJS(): void;

@Component({
  selector: 'app-javascript-api',
  templateUrl: './javascript-api.component.html',
  styleUrls: ['./javascript-api.component.css']
})
export class JavascriptApiComponent implements OnInit {

  javascriptApi: HTMLScriptElement

  credentialsFormIsDisplayed = true;
  credentialsForm:FormGroup;

  javascriptApiFormIsDisplayed = false;
  javascriptApiForm: FormGroup;

  constructor(
    private credentialsFormBuilder: FormBuilder,
    private javascriptApiFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.buildCredentialsForm()
    this.showJavascriptApiForm()
    this.buildJavascriptApiForm()

    this.javascriptApi = document.createElement("script");
    this.javascriptApi.src = "https://js.paymentsos.com/latest/token.min.js";
    document.body.appendChild(this.javascriptApi);
  }

  ngOnInit(): void {
    initPayUHubJavascriptApiJS();
  }

  private buildCredentialsForm() {
    this.credentialsForm = this.credentialsFormBuilder.group({
      environment: ['', [Validators.required]],
      publicKey: ['', [Validators.required]],
    });
  }

  saveCredentials(event: Event) {
    event.preventDefault();
    if (this.credentialsForm.valid) {
        this.snackBar.open('Successfully saved', '',{duration: 1500, panelClass: ['snackbar']})
    }
  }

  showJavascriptApiForm() {
    if (this.javascriptApiFormIsDisplayed) {
      this.javascriptApiFormIsDisplayed = false;
      this.credentialsFormIsDisplayed = true;
    } else {
      this.javascriptApiFormIsDisplayed = true;
      this.credentialsFormIsDisplayed = false;
    }
  }

  private buildJavascriptApiForm() {
    this.javascriptApiForm = this.javascriptApiFormBuilder.group({
      tokenType: ['', [Validators.required]],
      cardHolderName: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
      creditCardDate: ['', [Validators.required]],
      //creditCard: ['', [CreditCardValidators.validateCCNumber]],
      //creditCardDate: ['', [CreditCardValidators.validateExpDate]],
      documentNumber: ['', [Validators.required]],
      //documentType: ['', [Validators.required]],
    });
  }

  generateToken(event: Event) {
    event.preventDefault();
    if (this.javascriptApiForm.valid) {
        this.snackBar.open('Token genenerated', '',{duration: 5000, panelClass: ['snackbar']})
    }
  }
}