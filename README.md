# traversylandia
Full stack application using Vuejs+Expressjs+MongoDB+mLab+Heroku ... i crec que no em deixo res...

- Iniciat en Juny 2020
- La idea és crear una Full Stack Application desplegada a HEROKU de la manera més simple, i més endavant, modificar-la amb els següents canvis
  - Llevar Vue.js i emprar només Vanilla JS
  - Crear un CRUD que pugui desplegar fàcilment en la web
  - "Dockeritzar" l'aplicació per poder emprar-la en local 

## Webgraphy
- [Full Stack Vue.js, Express & MongoDB, Express API --> Heroku + mLab - TraversyMedia)](https://www.youtube.com/watch?v=j55fHUJqtyw)
  - Presenta errades en connexió a Mongo, ja que +**mLab ha estat absorbit per Atlas MongoDB**. Però és una guia general molt bona per construir un _back_ amb Express, router api i MongoDB
- [CRUD Operations with Mongoose and MongoDB Atlas - Digital Ocean](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)
  - Amb `Mongoose` puc fer CRUD en un _back_ amb Express.js molt fàcilment


## MongoDB
La collecion que estic emprant se diu vue_express.posts (vue_express és la BDD) i se troba [aqui](https://cloud.mongodb.com/v2/5ee9d0575a47887e5979df91#metrics/replicaSet/5ee9d1c8fd94d31bbc6545b4/explorer/vue_express/posts/find)

### Atlas MongoDB

1. Iniciar sessió a MongoDB Atlas
2. Crear un cluster i un usuari de base de dades (_dbUser_)
3. Crear un conexió
  - Des de la pantalla de CLUSTER, espitja el botó Connexió 
  - Tria l'opció 2, _Connect with my Application_ o algo així. 
  - El meu token és: 

    `mongodb+srv://dbUser:aquielmeuPassword@cluster0-tuhp5.mongodb.net/vue_express?retryWrites=true&w=majority`

4. Crear la database _vue_express_ i la Collection _posts_ des de COLLECTIONS


## Postman

Estic fent peticions amb Postman. Aquestes peticions per consultar. Guardades a la Collection anomenada `traversymedia` de Postman de l'usuari corporatiu de Gmail.