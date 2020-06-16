const express = require('express');
// xtoni  No record per a què serveix --> investigar (pdt)
const bodyParser = require('body-parser');
//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json())
app.use(cors());


//Ruta de la API
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;

//Iniciam el servidor
app.listen(port, () => console.log(`Servidor iniciat a port ${port}`));

