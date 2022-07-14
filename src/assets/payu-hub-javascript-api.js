var environment;
var publicKey;

var tokenType;
var holderName;
var cardNumber;
var expirationDate;
var identityDocumentNumber;
var identityDocumentType;

function initPayUHubJavascriptApiJS() {
    console.log("PayU Hub Javascritp SDK called");
    
    document.getElementById('credentials-form').addEventListener('submit', (event) => {
        event.preventDefault()
        this.environment = document.getElementById("environment").getAttribute('value');
        this.publicKey = document.getElementById("public-key").value;
        
        console.log("Environment: "+this.environment+"\n"+ "Public Key: "+this.publicKey+"\n");
    })

    document.getElementById('jsapi-form').addEventListener('submit', async (event) => {
        event.preventDefault()
        POS.setEnvironment(this.environment);
        POS.setPublicKey(this.publicKey);
        this.tokenType = document.getElementById("token-type").getAttribute('value');
        this.holderName = document.getElementById("card-holder").value;
        this.cardNumber = document.getElementById("card-number").value;
        this.expirationDate = document.getElementById("card-expdate").value;
        this.identityDocumentNumber = document.getElementById("document-number").value;
        //this.identityDocumentType = document.getElementById("document-type").getAttribute('value');

        const result = await POS.tokenize ({
            "token_type": this.tokenType,
            "holder_name": this.holderName,
            "card_number": this.cardNumber,
            "expiration_date":this.expirationDate,
                "identity_document": {
                "number": this.identityDocumentNumber
                //"type": this.identityDocumentType
            }
        },
        // callback function, needed for grabbing the card token from the POSC.tokenize function
        function showToken(result){
            alert('Result'+result);
            console.log('Result: '+result)
            document.getElementById("token-result").textContent = result;
        });
    })
}