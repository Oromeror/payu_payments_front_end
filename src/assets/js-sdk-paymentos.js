// This is our index.js file

/*
Create an instance of the secure fields. Pass the public key as the first argument.
As the second argument, we'll pass a list of custom fonts to be applied to the fields (this is optional).
*/

function initPaymentsOsSecureFormFieldsJsSdk() {

  console.log("PaymentOS Javascript SDK called");

  const fonts = [{ src: 'https://fonts.googleapis.com/css?family=Source+Code+Pro', }]

  const formElements = new POS.Fields("af61f53b-27bb-4d1d-b40c-5d208889946c", { fonts })


  /*
  Create an object holding additional options that you can pass to the constructor for instantiating
  the credit card and card expiry fields.
  There are lots of other options available that you can pass to the constructor,
  but to keep it simple we'll just show this one object in our example.
  */

  const placeholders = {
    cardNumber: '0000 0000 0000 0000',
    expDate: 'MM / YY',
    cvv: 'xxx'
  }

  const style = {
    base: {
      color: '#000',
      fontWeight: 600,
      fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
      fontSize: '15px',
      fontSmoothing: 'antialiased',
      ':focus': {
        color: '#424770',
      },

      '::placeholder': {
        color: '#9BACC8',
      },

      ':focus::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#FF0000',
      ':focus': {
        color: '#FA755A',
      },
      '::placeholder': {
        color: '#FFCCA5',
      },
    }
  };

  const classes = {
    invalid: 'my-own-invalid-class'
  }

  // Instantiate the fields you want to show and mount them to the DOM.
  const cardNumber = formElements.create('cardNumber', { style, placeholders, classes })
  cardNumber.mount('#card-number')

  const expiry = formElements.create('creditCardExpiry', { placeholders })
  expiry.mount('#exp-date')

  const cvv = formElements.create('cvv', { placeholders })
  cvv.mount('#cvv')

  cardNumber.on('blur', (event) => {
    console.log(event)
  })

  /*
  Create a token when the user submits the form, but not until we fetched the card holder's name
  so that we can pass it in an additional data object to the createToken call.
  */

  document.getElementById('payment-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const additionalData = { holder_name: document.getElementById('cardholder-name').value }
    const result = await POS.createToken(cardNumber, { additionalData, environment: 'test' })
    console.log(`Response ${JSON.stringify(result)}`)
    alert(`Response ${JSON.stringify(result)}`);
  })
}
