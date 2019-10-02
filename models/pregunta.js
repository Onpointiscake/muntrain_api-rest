const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PreguntaSchema = new Schema({
    pregunta: {
        type: String,
        required: [true, 'debes escribir una pregunta']
    }
});

const Pregunta = mongoose.model('pregunta', PreguntaSchema)

module.exports = Pregunta;
