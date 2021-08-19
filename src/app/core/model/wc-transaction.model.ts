export interface WebCheckoutTransaction {
    merchantId: number;
    accountId: number;
    description: string;
    referenceCode: string;
    amount: number;
    tax: number;
    taxReturnBase: number;
    currency: string;
    signature: string;
    test: number;
    buyerEmail: string;
    responseUrl: string;
    confirmationUrl: string;
}