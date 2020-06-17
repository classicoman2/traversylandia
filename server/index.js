const express = require('express');
// No record per a què serveix --> investigar (pdt)  -- xtoni
const bodyParser = require('body-parser');
//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require('cors');

const mongoose = require('mongoose');



const app = express();

//Middleware
app.use(bodyParser.json())
app.use(cors());


//Ruta de la API
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);


const port = process.env.PORT || 5001;

//Iniciam el servidor
app.listen(port, () => console.log(`Servidor iniciat a port ${port}`));

//Connectar a la base de dades de MongoDB Atlas emprant Mongoose  -- xtoni
//https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas   
mongoose.connect('mongodb+srv://dbUser:Qwert123@cluster0-tuhp5.mongodb.net/vue_express?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
