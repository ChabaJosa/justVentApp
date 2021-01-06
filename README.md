# Simple React Native Blog App

This project requires an additional repo ---> [JsonServer](https://github.com/ChabaJosa/json-server).

To run this app you need to:

- 1) Clone this repo and the JsonServer repo.
- 2) Npm Install: json-server, ngrok, axios and expo.
- 3) Open a shell and cd into the json server directory and run `npm run db`
- 3) Open a second shell and cd into the json server directory and run `npm run tunnel`
- 4) Grab the ngrok link from the latter (Ex: 'http://da72d0cc54ae.ngrok.io')
- 5) Open a third shell and cd into the this directory, replace the ngrok link in the jsonServer.js file.
- 6) Run `expo start`
