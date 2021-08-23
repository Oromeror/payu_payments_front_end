import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  responses: { fieldName: string, fieldValue: string }[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const merchantId: string = '' + this.route.snapshot.queryParamMap.get('merchantId');
    const merchant_name: string = '' + this.route.snapshot.queryParamMap.get('merchant_name');
    const merchant_address: string = '' + this.route.snapshot.queryParamMap.get('merchant_address');
    const telephone: string = '' + this.route.snapshot.queryParamMap.get('telephone');
    const merchant_url: string = '' + this.route.snapshot.queryParamMap.get('merchant_url');
    const transactionState: string = '' + this.route.snapshot.queryParamMap.get('transactionState');
    const lapTransactionState: string = '' + this.route.snapshot.queryParamMap.get('lapTransactionState');
    const message: string = '' + this.route.snapshot.queryParamMap.get('message');
    const referenceCode: string = '' + this.route.snapshot.queryParamMap.get('referenceCode');
    const reference_pol: string = '' + this.route.snapshot.queryParamMap.get('reference_pol');
    const transactionId: string = '' + this.route.snapshot.queryParamMap.get('transactionId');
    const description: string = '' + this.route.snapshot.queryParamMap.get('description');
    const trazabilityCode: string = '' + this.route.snapshot.queryParamMap.get('trazabilityCode');
    const cus: string = '' + this.route.snapshot.queryParamMap.get('cus');
    const orderLanguage: string = '' + this.route.snapshot.queryParamMap.get('orderLanguage');
    const extra1: string = '' + this.route.snapshot.queryParamMap.get('extra1');
    const extra2: string = '' + this.route.snapshot.queryParamMap.get('extra2');
    const extra3: string = '' + this.route.snapshot.queryParamMap.get('extra3');
    const polTransactionState: string = '' + this.route.snapshot.queryParamMap.get('polTransactionState');
    const signature: string = '' + this.route.snapshot.queryParamMap.get('signature');
    const polResponseCode: string = '' + this.route.snapshot.queryParamMap.get('polResponseCode');
    const lapResponseCode: string = '' + this.route.snapshot.queryParamMap.get('lapResponseCode');
    const risk: string = '' + this.route.snapshot.queryParamMap.get('risk');
    const polPaymentMethod: string = '' + this.route.snapshot.queryParamMap.get('polPaymentMethod');
    const lapPaymentMethod: string = '' + this.route.snapshot.queryParamMap.get('lapPaymentMethod');
    const polPaymentMethodType: string = '' + this.route.snapshot.queryParamMap.get('polPaymentMethodType');
    const lapPaymentMethodType: string = '' + this.route.snapshot.queryParamMap.get('lapPaymentMethodType');
    const installmentsNumber: string = '' + this.route.snapshot.queryParamMap.get('installmentsNumber');
    const TX_VALUE: string = '' + this.route.snapshot.queryParamMap.get('TX_VALUE');
    const TX_TAX: string = '' + this.route.snapshot.queryParamMap.get('TX_TAX');
    const currency: string = '' + this.route.snapshot.queryParamMap.get('currency');
    const lng: string = '' + this.route.snapshot.queryParamMap.get('lng');
    const pseCycle: string = '' + this.route.snapshot.queryParamMap.get('pseCycle');
    const buyerEmail: string = '' + this.route.snapshot.queryParamMap.get('buyerEmail');
    const pseBank: string = '' + this.route.snapshot.queryParamMap.get('pseBank');
    const pseReference1: string = '' + this.route.snapshot.queryParamMap.get('pseReference1');
    const pseReference2: string = '' + this.route.snapshot.queryParamMap.get('pseReference2');
    const pseReference3: string = '' + this.route.snapshot.queryParamMap.get('pseReference3');
    const authorizationCode: string = '' + this.route.snapshot.queryParamMap.get('authorizationCode');
    const processingDate: string = '' + this.route.snapshot.queryParamMap.get('processingDate');


    this.responses = [
      { fieldName: 'merchantId', fieldValue: merchantId },
      { fieldName: 'merchant_name', fieldValue: merchant_name },
      { fieldName: 'merchant_address', fieldValue: merchant_address },
      { fieldName: 'telephone', fieldValue: telephone },
      { fieldName: 'merchant_url', fieldValue: merchant_url },
      { fieldName: 'transactionState', fieldValue: transactionState },
      { fieldName: 'lapTransactionState', fieldValue: lapTransactionState },
      { fieldName: 'message', fieldValue: message },
      { fieldName: 'referenceCode', fieldValue: referenceCode },
      { fieldName: 'reference_pol', fieldValue: reference_pol },
      { fieldName: 'transactionId', fieldValue: transactionId },
      { fieldName: 'description', fieldValue: description },
      { fieldName: 'trazabilityCode', fieldValue: trazabilityCode },
      { fieldName: 'cus', fieldValue: cus },
      { fieldName: 'orderLanguage', fieldValue: orderLanguage },
      { fieldName: 'extra1', fieldValue: extra1 },
      { fieldName: 'extra2', fieldValue: extra2 },
      { fieldName: 'extra3', fieldValue: extra3 },
      { fieldName: 'polTransactionState', fieldValue: polTransactionState },
      { fieldName: 'signature', fieldValue: signature },
      { fieldName: 'polResponseCode', fieldValue: polResponseCode },
      { fieldName: 'lapResponseCode', fieldValue: lapResponseCode },
      { fieldName: 'risk', fieldValue: risk },
      { fieldName: 'polPaymentMethod', fieldValue: polPaymentMethod },
      { fieldName: 'lapPaymentMethod', fieldValue: lapPaymentMethod },
      { fieldName: 'polPaymentMethodType', fieldValue: polPaymentMethodType },
      { fieldName: 'lapPaymentMethodType', fieldValue: lapPaymentMethodType },
      { fieldName: 'installmentsNumber', fieldValue: installmentsNumber },
      { fieldName: 'TX_VALUE', fieldValue: TX_VALUE },
      { fieldName: 'TX_TAX', fieldValue: TX_TAX },
      { fieldName: 'currency', fieldValue: currency },
      { fieldName: 'lng', fieldValue: lng },
      { fieldName: 'pseCycle', fieldValue: pseCycle },
      { fieldName: 'buyerEmail', fieldValue: buyerEmail },
      { fieldName: 'pseBank', fieldValue: pseBank },
      { fieldName: 'pseReference1', fieldValue: pseReference1 },
      { fieldName: 'pseReference2', fieldValue: pseReference2 },
      { fieldName: 'pseReference3', fieldValue: pseReference3 },
      { fieldName: 'authorizationCode', fieldValue: authorizationCode },
      { fieldName: 'processingDate', fieldValue: processingDate }
    ]
  }
}
