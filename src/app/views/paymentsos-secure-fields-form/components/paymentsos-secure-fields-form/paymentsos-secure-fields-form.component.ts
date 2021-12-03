import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cardTokenModel } from "../../../../core/model/secure-fields-form/wc-cardtoken.model";

declare function initPaymentsOsSecureFormFieldsJsSdk(): void;

@Component({
  selector: 'app-paymentsos-secure-fields-form',
  templateUrl: './paymentsos-secure-fields-form.component.html',
  styleUrls: ['./paymentsos-secure-fields-form.component.css']
})
export class PaymentsosSecureFieldsFormComponent implements OnInit {

  secureFields: HTMLScriptElement;
  fontawesome: HTMLScriptElement;

  configFormIsDisplayed = true;
  configurationForm:FormGroup;
  
  secureFieldsFormIsDisplayed = false;
  secureFieldsForm: FormGroup;

  constructor(
    private configurationFormBuilder: FormBuilder,
    private secureFieldsFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.buildConfigurationForm()
    this.showSecureFieldsForm()
    this.buildSecureFieldsForm()

    this.secureFields = document.createElement("script")
    this.secureFields.src = "https://js.paymentsos.com/v3/latest/secure-fields.min.js"
    document.body.appendChild(this.secureFields)

    this.fontawesome = document.createElement("script")
    this.fontawesome.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js"
    document.body.appendChild(this.fontawesome)

  }

  ngOnInit(): void {
    initPaymentsOsSecureFormFieldsJsSdk();
  }

  private buildConfigurationForm() {
    this.configurationForm = this.configurationFormBuilder.group({
      environment: ['', [Validators.required]],
      publicKey: ['', [Validators.required]]
    });
  }

  saveConfiguration(event: Event) {
    event.preventDefault();
    if (this.configurationForm.valid) {
        this.snackBar.open('Successfully saved', '',{duration: 1500, panelClass: ['snackbar']})
    }
  }

  showSecureFieldsForm() {
    if (this.secureFieldsFormIsDisplayed) {
      this.secureFieldsFormIsDisplayed = false;
      this.configFormIsDisplayed = true;
    } else {
      this.secureFieldsFormIsDisplayed = true;
      this.configFormIsDisplayed = false;
    }
  }

  private buildSecureFieldsForm() {
    this.secureFieldsForm = this.secureFieldsFormBuilder.group({
      cardholderName: ['', []],
    });
  }

  createToken(event: Event) {
    event.preventDefault();
    if (this.secureFieldsForm.valid) {
      const value = this.secureFieldsForm.value;
      const newToken: cardTokenModel = {
        cardholderName: value.cardholderName
      };
      console.log('calling Test service')
      this.snackBar.open('Card successfully added', '', { duration: 5000, panelClass: ['snackbar'] })
      //this.createToken(newToken);
    }
  }

}