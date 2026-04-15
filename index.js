// Først bruker vi 'require' for å referere til Express-biblioteket
//  (som ligger i node_modules):
const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.use(express.static('public'));



// Så starter vi serveren, som nå lytter på port 3000:
app.listen(3000, () => {
 console.log('Serveren kjører på http://localhost:3000');
});