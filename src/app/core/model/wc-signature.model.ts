export interface WebCheckoutSignature {
    apiKey: string;
    merchantId: number;
    referenceCode: string;
    amount: number;
    currency: string;
}