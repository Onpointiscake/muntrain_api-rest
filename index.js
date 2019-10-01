const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const routes = require('./routes/api')

app.use(bodyParser.json())
app.use('/api', routes)
app.listen(process.env.port || 4000, () => console.log('express listening now...'))
