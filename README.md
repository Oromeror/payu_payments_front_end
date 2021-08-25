# Payments-1001

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1. and making use of [Firebase](https://firebase.google.com/)

This repository is based on the implementation of a simple API for the PayU [WebCheckout integration](http://developers.payulatam.com/latam/en/docs/integrations/webcheckout-integration.html).

## Installation

- download packages and it's dependencies

    `npm install`

## Execution

Run `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --ssl` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

- You will need to create a project in firebase, you can read the firebase quick start [documentation](https://firebase.google.com/docs/hosting/quickstart) for further assistance.

    To install firebase

    `npm install firebase @angular/fire`

    To iniciate firebase

    `firebase init` you have to select the project that you created and select the hosting feature option provided by firebase. It will also ask you for the public directory, you only have to type the `dist/` directory, then select configure as a sinple-page app.

    To deploy

    `firebase deploy`
