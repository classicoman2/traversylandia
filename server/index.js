const express = require('express');
const app = express();

// No record per a què serveix --> investigar (pdt)  -- xtoni
const bodyParser = require('body-parser');
//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require('cors');

const mongoose = require('mongoose');


// xtoni --> en mode dev, sense aquestes 2 instruccions funciona igualment !

//Middleware
app.use(bodyParser.json())
app.use(cors());


// Rutes de la API
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const cyclists = require('./routes/api/cyclists');
app.use('/api/cyclists', cyclists);


// PRODUCTION 
if (process.env.NODE_ENV === 'production') {
  //Static folder que hem creat en fer   npm run build
  app.use(express.static(__dirname + '/public/'));

  //Handle Single Page Application :   qualsevol ruta -- xtoni
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Port = 5000
const port = process.env.PORT || 5000;

// Iniciam el servidor
app.listen(port, () => console.log(`Servidor iniciat a port ${port}`));

//Connectar a la base de dades de MongoDB Atlas emprant Mongoose  -- xtoni
//https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas   


// Base de dades 'vue_express'
/*
mongoose.connect('mongodb+srv://dbUser:Qwert123@cluster0-tuhp5.mongodb.net/vue_express?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
*/

// Base de dades 'uci_database'
mongoose.connect('mongodb+srv://dbUser:Qwert123@cluster0-tuhp5.mongodb.net/uci_database?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
