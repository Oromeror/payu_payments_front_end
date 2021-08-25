import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WebCheckoutSignature } from 'src/app/core/model/wc-signature.model';

import { Md5 } from "md5-typescript";
import * as shajs from 'sha.js';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  signatureForm: FormGroup;
  pricePattern = '^[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[.][1-9][0-9]*$';
  signatures: { hashType: string, hash: string }[] = [];

  constructor(
    private signatureFormBuilder: FormBuilder,
  ) {
    this.buildSignatureForm()
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

}
