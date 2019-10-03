const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')

// Connect to mongodb
mongoose.connect('mongodb://localhost/muntraingo', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use('/api', routes)

// middleware para admitir errores:
app.use((err,req,res, next) => {
    res.status(422).send({
        error: err.message
    })
})
app.listen(process.env.port || 4000, () => console.log('express listening now...'))
