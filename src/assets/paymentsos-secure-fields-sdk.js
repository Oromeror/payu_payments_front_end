var environment;
var publicKey; 
var formElements;
const fonts = [{src: 'https://fonts.googleapis.com/css?family=Source+Code+Pro'}]
const placeholders = { cardNumber: "0000 0000 0000 0000", expDate: "MM / YY", cvv: "XXX" };
	const classes = { invalid: "my-own-invalid-class" };
	const style = {
		base: {
			color: "#000",
			fontWeight: 600,
			fontFamily: "Quicksand, Open Sans, Segoe UI, sans-serif",
			fontSize: "15px",
			fontSmoothing: "antialiased",
			":focus": {
			color: "#424770",
			},

			"::placeholder": {
			color: "#9BACC8",
			},

			":focus::placeholder": {
			color: "#CFD7DF",
			},
		},
		invalid: {
			color: "#FF0000",
			":focus": {
			color: "#FA755A",
			},
			"::placeholder": {
			color: "#FFCCA5",
			},
		},
	};

function initPaymentsOsSecureFormFieldsJsSdk() {
	document.getElementById('config-form').addEventListener('submit', (event) => {
		event.preventDefault();
		this.environment = document.getElementById("environment").getAttribute('value')
		this.publicKey = document.getElementById("public-key").value;
			console.log(
				"Environment: "+this.environment+"\n"+
				"Public Key: "+this.publicKey+"\n")

		this.formElements = new POS.Fields(this.publicKey, {fonts})

		console.log("PaymentOS Javascript SDK called");
		
		const cardNumber = formElements.create("cardNumber", { style, placeholders, classes });
		cardNumber.mount("#card-number");

		const expiry = formElements.create("creditCardExpiry", { style, placeholders, classes });
		expiry.mount("#exp-date");

		const cvv = formElements.create("cvv", { style, placeholders, classes });
		cvv.mount("#cvv");

		cardNumber.on("focus", (event) => { console.log("focus: card number field was clicked");});
		cardNumber.on("change", (event) => {console.log("change: card number field changed");});
		cardNumber.on("blur", (event) => {console.log("blur: user left card number field", event);});

		expiry.on("focus", (event) => {console.log("focus: expiry field was clicked");});
		expiry.on("change", (event) => {console.log("change: expiry field changed");});
		expiry.on("blur", (event) => {console.log("blur: user left expiry field");});

		cvv.on("focus", (event) => {console.log("focus: cvv field was clicked");});
		cvv.on("change", (event) => {console.log("change: cvv field changed");});
		cvv.on("blur", (event) => {console.log("blur: user left cvv field");});

		document.getElementById('payment-form').addEventListener('submit', async (event) => {
			event.preventDefault()
			const additionalData = {holder_name: document.getElementById("cardholder-name").value };
			const result = await POS.createToken(cardNumber, {additionalData, environment: this.environment });
			alert('Result: '+result);
			console.log('Result: '+result)
			document.getElementById("secure-fields-result").textContent = result;
		});
		
	});
}