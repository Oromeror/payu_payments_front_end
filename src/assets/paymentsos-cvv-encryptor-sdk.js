var tokenValue;
var environment;
var publicKey;
var cvv;

function initPaymentsOsCVVEncryptorJsSdk() {
    console.log("PaymentOS cvv encrypter javascritp SDK  called");
    
    document.getElementById('token-form').addEventListener('submit', (event) => {
        event.preventDefault()
        this.environment = document.getElementById("environment").getAttribute('value')        ;
        this.publicKey = document.getElementById("public-key").value;
        this.tokenValue = document.getElementById("token").value;
            console.log(
                "Environment: "+this.environment+"\n"+
                "Public Key: "+this.publicKey+"\n"+
                "Token: "+this.tokenValue+"\n")
    })

    document.getElementById('cvv-form').addEventListener('submit', async (event) => {
        event.preventDefault()
        POS.setEnvironment(this.environment);
        POS.setPublicKey(this.publicKey);
        this.cvv = document.getElementById("cvv").value;
        const result = await POS.tokenize({
            "token_type": "card_cvv_code",
            "credit_card_cvv": this.cvv,
            "payment_method_token": this.tokenValue
        },
        // callback function, needed for grabbing the card token from the POSC.createToken function
        function showToken(result){
            alert('Result'+result);
            console.log('Result: '+result)
            document.getElementById("token-result").textContent = result;
        }
        );
    })
}