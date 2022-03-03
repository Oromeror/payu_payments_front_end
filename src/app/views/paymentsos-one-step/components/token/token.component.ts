import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CreditCardValidators } from 'angular-cc-library';
import { Card } from 'src/app/core/model/paymentsos/card.model';
import { TokenService } from 'src/app/core/services/paymentsos/token/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {


  tokenForm: FormGroup;
  submitted: boolean = false;
  tokenResponse: any;


  constructor(
    private tokenFormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private tokenService: TokenService,
  ) {
    this.buildTokenForm()
  }

  ngOnInit() {
  }

  private buildTokenForm() {
    this.tokenForm = this.tokenFormBuilder.group({
      cardHolderName: ['', [Validators.required]],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      creditCardDate: ['', [CreditCardValidators.validateExpDate]],
      creditCardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    });
  }

  createToken(event: Event) {
    event.preventDefault();
    if (this.tokenForm.valid) {
      const value = this.tokenForm.value;
      const newCard: Card = {
        card_number: value.creditCard,
        expiration_date: value.creditCardDate.replace(/\s/g, ""),
        holder_name: value.cardHolderName,
        token_type: "credit_card",
        identity_document_type:value.documentType,
        identity_document_number: value.documentNumber
      }
      console.log(newCard.expiration_date)
      this.tokenService.createToken(newCard, 'application/json', '1.3.0', 'test', 'com.universehorizons.sandbox_colombia', '0a0caea2-267b-448a-858e-2daa2a6d7fa3').subscribe(
        (response: any) => {
          console.log(response)
          if (response.state === "created") {
            this.tokenResponse = response;
            this.snackBar.open('Token generated successfully', 'close', { duration: 5000 });
          } else {
            this.snackBar.open('It was not possible to create the card token', 'close', { duration: 5000 });
          }
        },
        (error: any) => { console.log(error); this.snackBar.open('Unexpected error.', 'close', { duration: 5000 }); }
      );
    }
  }

}