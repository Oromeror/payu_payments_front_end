import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {cardTokenModel} from "../../../../core/model/wc-cardtoken.model";

declare function initPaymentsOsSecureFormFieldsJsSdk(): void;

@Component({
  selector: 'app-paymentsos-secure-fields-form',
  templateUrl: './paymentsos-secure-fields-form.component.html',
  styleUrls: ['./paymentsos-secure-fields-form.component.css']
})
export class PaymentsosSecureFieldsFormComponent implements OnInit {

  secureFields: HTMLScriptElement;
  fontawesome: HTMLScriptElement;

  secureFieldsForm: FormGroup;

  constructor(
    private secureFieldsFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.buildSecureFieldsForm();

    this.secureFields = document.createElement("script");
    this.secureFields.src = "https://js.paymentsos.com/v3/latest/secure-fields.min.js";
    document.body.appendChild(this.secureFields);

    this.fontawesome = document.createElement("script");
    this.fontawesome.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
    document.body.appendChild(this.fontawesome);

  }

  ngOnInit(): void {
    initPaymentsOsSecureFormFieldsJsSdk();
  }

  private buildSecureFieldsForm() {
    this.secureFieldsForm = this.secureFieldsFormBuilder.group({
      cardholderName: ['', [Validators.required]],
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
        this.snackBar.open('Successfully operation', '',{duration: 5000, panelClass: ['snackbar']})
        //this.createToken(newToken);
    }
  }

}
