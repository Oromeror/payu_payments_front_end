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
  documents: { iso: string, description: string }[] = [];
  submitted: boolean = false;


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
        expiration_date: value.creditCardDate,
        holder_name: value.cardHolderName,
        token_type: "credit_card",
        identity_document: {
          type: value.documentType,
          number: value.documentNumber
        }
      }
      this.tokenService.createToken(newCard, '', '', '').subscribe(
        (response: any) => {
          if (response.status_code === 201) {
            console.log(response)
            this.snackBar.open('Token generated successfully', 'close', { duration: 2000 });
          } else {
            this.snackBar.open('It was not possible to create the card token', 'close', { duration: 2000 });
          }
        },
        (error: any) => { console.log(error); this.snackBar.open('Unexpected error.', 'close', { duration: 2000 }); }
      );
    }
  }

}