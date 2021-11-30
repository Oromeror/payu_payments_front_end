export interface Charge {
    amount: string;
    "billing_address": {
        "country": string,
        "email": string,
        "first_name": string,
        "last_name": string,
        "line1": string,
        "state": string,
        "zip_code": string
    },
    currency: string;
    "order": {
        "tax_amount": number
    },
    "shipping_address": {
        "city": string,
        "country": string,
        "email": string,
        "first_name": string,
        "last_name": string,
        "line1": string,
        "line2": string,
        "phone": string,
        "state": string,
        "zip_code": string
    },
    statement_soft_descriptor: string;
}
