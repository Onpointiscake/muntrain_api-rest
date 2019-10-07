const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')

//Esta parte es la que tienes que cambiar
    // Connect to mongodb
    //mongoose.connect('mongodb://localhost/muntraingo', { useNewUrlParser: true, useUnifiedTopology: true })
    //Hasta aqui ------------------------

    //Con esto:

 const MongoClient = require('mongodb').MongoClient;
   const uri = "mongodb+srv://dbUser594:superSecret@cluster0-ryb4p.mongodb.net/admin?retryWrites=true&w=majority"
   const client = new MongoClient(uri, { useNewUrlParser: true });
   client.connect(err => {
       const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
  });
 ///Fin de sustitucion -------------

 mongoose.Promise = global.Promise;
 app.use(express.static('public'))
 app.use(bodyParser.json())
 app.use('/api', routes)

 // middleware para admitir errores:
 app.use((err,req,res, next) => {
     res.status(422).send({
         error: err.message
     })
 })
 app.listen(process.env.port || 4000, () => console.log('express listening now...'))
