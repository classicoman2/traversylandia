# traversylandia

- Data inici: 15 Juny 2020
- Data darrera mod: 20 Des 2020
- Descripció: Full stack application emprant Javascript asíncron (Fetch) i Express.js, ,amb desplegament a Heroku i Atlas MongoDB.
- Notes:
  - Després de fer canvis, per desplegar fer `git push heroku master` i `heroku open`
  - La carpeta client està a `client` i se desplega fent `gulp build`a dins de `/server/public`


## TODO

- [ ] :bug: En desplegament, no esborra perquè no agafa atribut `onclick` en HTML --> afegir dinàmicament amb `addEventListener()` en crear el llistat.
- [ ] Completar el formulari
- [ ] Falta UPDATE en el CRUD
- [x] Emprar REST CLIENT (extensió de vscode) per guardar en un fitxer `.rest` les peticions a API
- [ ] Investigar els [Schema](https://mongoosejs.com/docs/guide.html#statics) de _Mongoose_


## MongoDB

La _Collection_ que estic emprant se diu uci_database.cyclists (uci_database és la BDD) i està allotjada [aqui](https://cloud.mongodb.com/)

### Atlas MongoDB

1. Iniciar sessió a MongoDB Atlas
2. Crear un cluster i un usuari de base de dades (_dbUser_)
3. Crear un conexió
  - Des de la pantalla de CLUSTER, espitja el botó Connexió 
  - Tria l'opció 2, _Connect with my Application_ o algo així. 
  - El meu token és: 

    `mongodb+srv://<elmeusuari>:<elmeuPassword>@cluster0-tuhp5.mongodb.net/<labasededades>?retryWrites=true&w=majority`

4. Les dades sensibles del _token_ estan guardades en fitxer .env de variables d'entorn (gitignore)
5. Creades la database `uci_database` i la Collection `cyclists` des de COLLECTIONS

## Peticions a Rest API

Estan emmagatzamades en fitxer `proves_api.rest` - emprant extensió REST CLIENT de vscode.

## Desplegaments local i remot, seguretat.

### Local

- Front. 
  - `gulp build` compila la versió de producció del front en `/server/public`

- Back.
  - Dev:   `npm run dev` - empra `nodemon`
  - Prod:  `npm run start` 

### Seguretat 

En desplegar a Heroku, si volem que la petició a la API funcioni:
- Entrar a Atlas, a l'opció _Network Access_ i afegir a la _IP Whitelist_ el següent: `0.0.0.0/0` que vol dir que qualsevol hi pot accedir. [Accés](https://cloud.mongodb.com/v2/5ee9d0575a47887e5979df91#security/network/whitelist)
- Entrar a Heroku. anar al Desplegament, clicar en _Settings_ i a sota, botó _Reveal Config Vars_ i afegir `MONGODB_URL` i posar el token especificat més adalt en aquest document. [Accés](https://dashboard.heroku.com/apps/agile-retreat-26891/settings)

## Webgrafia

1. Full Stack Vue.js, Express & MongoDB - TraversyMedia: tutorial que he seguit. He emprat _Mongoose_ per connectar a Mongo i Atlas MongoDB (que ha absorbit **mLab** des de Febrer 2019.
  - [Part I: Back amb npm, Express.js, MongoDB allotjat a Atlas](https://www.youtube.com/watch?v=j55fHUJqtyw)
  - [Part II: Front amb VUE CLI i classe estàtica PostService.js per accés a API](https://www.youtube.com/watch?v=X-JZ-QPApUs&t=1s)
  - [Part III: Desplegament a Heroku](https://www.youtube.com/watch?v=W-b9KGwVECs)
2. [CRUD Operations with Mongoose and MongoDB Atlas - Digital Ocean](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas). Amb `Mongoose` puc fer CRUD en un _back_ amb Express.js molt fàcilment
3. [Complete REST API with MongoDB Atlas cloud, Node, and Express in 10 minutes](https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1). No ho he consultat encara, però pot servir per complementar l'anterior
4. [Emprar variables d'entorn a Node](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html). També he hagut de crear una variable d'entorn (anomenades _Config Var_) als settings de la meva app a **Heroku**


## Notes

Cal posar aquesta linia al començament de `client/src/js/script.js`per tal de poder crear la versió de producció del front amb `Gulp`:

    import regeneratorRuntime from "regenerator-runtime";

Soluciona [aquest problema](https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined) amb el packet _deprecated_ `babel-polyfill` 
  