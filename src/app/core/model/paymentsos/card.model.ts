export interface Card {
    "card_number": string,
    "expiration_date": string,
    "holder_name": string,
    "token_type": string,
    "identity_document": {
        "type": string,
        "number": string
    }
}